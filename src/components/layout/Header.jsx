import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)] px-8">

      <div>
        <h2 className="font-['Poppins'] text-3xl font-semibold text-[var(--text)]">
          Good Afternoon
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Find your next teammate.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex w-80 items-center rounded-2xl border border-[var(--border)] bg-white px-4 py-3">

          <Search
            size={18}
            className="text-[var(--text-muted)]"
          />

          <input
            className="ml-3 w-full bg-transparent outline-none"
            placeholder="Search builders..."
          />

        </div>

        <button className="rounded-2xl border border-[var(--border)] bg-white p-3 transition hover:shadow-lg">

          <Bell size={20} />

        </button>

      </div>
    </header>
  );
}

export default Header;