# Builder Match — Frontend Systems Challenge

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-State_Management-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A builder-networking app for hackathons: a participant scans another builder's
QR code, the connection appears **instantly** in the UI regardless of network
quality, and synchronization is reconciled in the background — all without a
backend, treating this as a frontend systems problem rather than a UI exercise.

**Live:** https://builder-match.vercel.app
**Challenge:** Genesis Frontend Engineering Challenge — "5,000 concurrent builders, unreliable connectivity"

```
builder-match/
├── index.html
├── vite.config.js
├── src/
│   ├── pages/              # Dashboard, Builders, Scanner, Team, Settings — orchestration only
│   ├── components/
│   │   ├── builders/       # BuilderCard, filters — presentational, prop-driven
│   │   ├── dashboard/      # StatCard, EventCard, HeroSection
│   │   ├── layout/         # Sidebar, Header — persistent across routes
│   │   └── common/         # Button, Card, SectionHeading
│   ├── layouts/            # MainLayout + <Outlet />
│   ├── routes/             # React Router route table
│   ├── store/              # Zustand: builderStore, offlineQueueStore
│   ├── data/                # builders.js, events.js — mock backend, isolated
│   ├── hooks/
│   ├── constants/
│   └── lib/
└── public/
```

---

## System architecture

Builder Match follows a **component-driven frontend architecture** with five
layers, each with a single responsibility. Nothing above the data layer knows
where its data comes from, which is what keeps a future backend migration
additive rather than a rewrite.

```
flowchart TD

A[User] --> B[React Router]
B --> C[MainLayout: Sidebar + Header]

C --> D[Dashboard]
C --> E[Builders]
C --> F[Scanner]
C --> G[Team]
C --> H[Settings]

D --> I[Presentation components]
E --> I
F --> I
G --> I
H --> I

I --> J[Zustand stores]
J --> K[builderStore]
J --> L[offlineQueueStore]

I --> M[Data layer: builders.js / events.js]
```

| Layer | Owns | Does not own |
|---|---|---|
| **Routing** (`routes/`, React Router) | URL → page mapping, nested layouts via `Outlet` | Page content, state |
| **Layout** (`Sidebar`, `Header`) | Persistent chrome across navigation, rendered once | Route-specific data |
| **Presentation** (`components/`) | How something looks; pure, prop-driven | Where its data comes from |
| **State** (`store/`) | `builderStore` (connections), `offlineQueueStore` (pending sync) | Rendering, data shape |
| **Data** (`data/`) | Mock records shaped like a future API response | UI concerns |

**Component communication is strictly one-way:**

```
flowchart LR
Page --> Component
Component -->|user action, e.g. "Connect"| Store
Store --> UpdatedState
UpdatedState --> Rerender[Only dependent components re-render]
```

A page renders components → a user action (e.g. clicking **Connect**) calls
into a Zustand store → the store updates → only the components subscribed to
that slice of state re-render. `BuilderCard` never touches the store
directly, and the store never imports a component — the two only meet
through props and selectors, which is what makes each layer independently
testable and replaceable.

---

## Architecture decisions

### 1. Optimistic connects backed by an offline queue, not a rollback

When a builder scans a QR code, the connection is written to state and
rendered **before** any network round trip completes. Two other approaches
were rejected:

- **Wait for confirmation** — correct, but a multi-second spinner on a
  handshake that should feel instant is a bad hackathon UX.
- **Optimistic + rollback on failure** — the connection would flash into
  existence and then vanish, which reads as a bug, not "still syncing."

Instead, a failed or delayed sync pushes the action onto a separate
`offlineQueueStore` while the builder stays visible with a pending-sync
indicator. The presentation layer never has to know whether a connection is
confirmed or queued — it renders the same either way. Reconciliation is the
sync layer's job, not the UI's.

### 2. State is normalized — stores hold IDs, not objects

`connectedBuilders` is `number[]`, not `Builder[]`. The full builder record
already lives in the data layer; storing a second copy in the Zustand store
would create two sources of truth that can drift. Every card resolves its
data via `id → lookup` at render time, so there's exactly one place a
builder's information can be wrong.

### 3. Zustand over Redux, deliberately

The app has exactly two pieces of state that need to be shared across
routes: `builderStore` (connections) and `offlineQueueStore` (pending sync).
Redux's actions/reducers/middleware stack buys nothing at that scale — it
adds boilerplate without adding correctness. Zustand stores are colocated
with the features that own them and read like plain functions.

### 4. Strict layer separation: pages orchestrate, components render, stores hold state

- **Pages** decide *what* to show and own data-fetching/orchestration.
- **Components** decide *how* something looks and take everything through
  props — `BuilderCard` has no idea whether its data came from a store, a
  mock file, or a future REST call.
- **Data** (`data/builders.js`, `data/events.js`) is shaped exactly like a
  future API response, so swapping mock data for real endpoints touches the
  data layer only — zero changes to presentation components.

This is enforced by convention rather than tooling, but it's the reason the
"add a real backend" migration below doesn't require re-architecting.

### 5. Rendering strategy for a ~5,000-row directory

Filtering (search text, skill, sort) is wrapped in `useMemo` so it only
recomputes when those specific inputs change, not on every render. Global
state updates are scoped through Zustand selectors so a single builder's
connection status changing doesn't re-render the other 4,999 cards. Combined,
this keeps the directory interactive at scale without server-side pagination
— though that's the first thing added if a real backend goes in (see below).

---

## Local setup

**Prerequisites:** Node 18+

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

No environment variables or backend are required — the app runs entirely
against the mock data layer in `src/data/`.

---

## Scaling to a burst of 5,000 concurrent interactions

**Where the current design already holds up:**

- Zustand selectors mean a connection event for one builder doesn't cascade
  re-renders through the other 4,999 — the cost of an interaction stays
  constant regardless of directory size.
- The offline queue means a burst of scans during a Wi-Fi dropout doesn't
  block the UI or lose data — it just grows a queue that drains once
  connectivity returns.

**What I'd change before a real burst load against a live backend:**

1. **Server-side, cursor-based pagination for the directory.** Right now the
   full mock dataset is filtered in-memory; at real scale I'd request pages
   from the API and keep only the visible window (+ buffer) mounted, the
   same pattern as `TanStack Virtual` but backed by network pages instead of
   a static array.
2. **Debounced search (~300ms).** Typing "react" currently could trigger five
   filter passes; debouncing collapses that to one, and would collapse five
   API calls to one once search hits a real endpoint.
3. **Client-side caching of recently viewed builders**, so re-opening a
   profile or re-entering the directory doesn't re-fetch data that hasn't
   changed.
4. **Route-level code splitting**, lazy-loading the QR Scanner (camera
   libraries are heavy) so it's not in the initial bundle for users who
   never open it.
5. **A real sync endpoint behind the offline queue** — `POST /api/connections`
   with the same optimistic-then-reconcile contract the UI already assumes,
   so the frontend requires no behavioral change, only a fetch call in place
   of the mock store update.
6. **CDN + horizontally scaled API instances** behind a load balancer for
   the write path, since correctness at that point lives in the backend, not
   in any single frontend session.

The reason most of this is additive rather than a rewrite: the frontend was
already built assuming eventual consistency and a swappable data layer, so
"add a backend" is a data-layer change, not an architecture change.

---

## Tech stack

| Technology | Why |
|---|---|
| React 19 | Component-driven UI, efficient re-rendering |
| Vite | Fast dev server, optimized production builds |
| Tailwind CSS | Consistent design tokens, rapid iteration |
| Zustand | Shared state without Redux boilerplate |
| React Router | Nested layouts via `MainLayout` + `Outlet` |
| Framer Motion | Declarative, subtle motion (transitions, hover, reveals) |
| html5-qrcode | Camera-based QR scanning, no native dependency |
| Lucide React | Consistent icon system |

---

## What this project demonstrates

Not isolated React knowledge, but the engineering decisions behind a frontend
that has to behave correctly under bad network conditions and a growing
dataset: optimistic UI with a real reconciliation strategy, normalized state,
memoized rendering, and a folder structure that keeps a future backend
migration to a data-layer change instead of a rewrite.
