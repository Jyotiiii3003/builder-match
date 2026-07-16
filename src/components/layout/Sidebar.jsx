import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  ScanLine,
  UserRoundPlus,
  Settings,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Builders",
    path: "/builders",
    icon: Users,
  },
  {
    title: "Scanner",
    path: "/scanner",
    icon: ScanLine,
  },
  {
    title: "Team",
    path: "/team",
    icon: UserRoundPlus,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sticky top-0 flex h-screen w-[290px] flex-col border-r border-[var(--border)] bg-white">

      {/* Logo */}

      <div className="border-b border-[var(--border)] px-8 py-8">

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-4"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-white shadow-lg">

            <Sparkles size={24} />

          </div>

          <div>

            <h1 className="font-['Poppins'] text-2xl font-bold text-[var(--text)]">
              Builder Match
            </h1>

            <p className="text-sm text-[var(--text-muted)]">
              Genesis Challenge
            </p>

          </div>

        </motion.div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8">

        <div className="space-y-3">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg"
                        : "text-[var(--text-muted)] hover:bg-violet-50 hover:text-[var(--primary)]"
                    }`}
                  >

                    <Icon size={21} />

                    <span className="font-medium">
                      {item.title}
                    </span>

                  </motion.div>
                )}
              </NavLink>
            );
          })}

        </div>

      </nav>

      {/* Footer */}

      <div className="border-t border-[var(--border)] p-6">

        <div className="rounded-3xl bg-gradient-to-r from-violet-50 to-cyan-50 p-5">

          <p className="font-['Sora'] text-lg font-semibold">
            Ready to Build?
          </p>

          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
            Find your next teammate and start building amazing Web3 projects.
          </p>

          <button
  onClick={() => navigate("/builders")}
  className="mt-5 w-full rounded-2xl bg-[var(--primary)] py-3 font-medium text-white transition hover:opacity-90"
>
  Explore Builders
</button>

        </div>

        <div className="mt-6 text-center">

          <p className="text-sm font-medium text-[var(--text)]">
            Builder Match
          </p>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Built for Genesis Frontend Challenge
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;