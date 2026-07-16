import {
  House,
  Users,
  ScanLine,
  UserRound,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  {
    name: "Home",
    icon: House,
    path: "/",
  },
  {
    name: "Builders",
    icon: Users,
    path: "/builders",
  },
  {
    name: "Scan",
    icon: ScanLine,
    path: "/scanner",
  },
  {
    name: "Team",
    icon: UserRound,
    path: "/team",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col rounded-r-3xl border-r border-[var(--border)] bg-white px-6 py-8">

      <Logo />

      <nav className="mt-12 flex flex-col gap-4">

        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl bg-[var(--primary-light)] p-5">

        <p className="text-sm font-semibold text-[var(--text)]">
          Genesis Hackathon
        </p>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Connect with builders around you.
        </p>

      </div>
    </aside>
  );
}

export default Sidebar;