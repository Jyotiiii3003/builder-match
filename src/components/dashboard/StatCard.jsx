import { motion } from "framer-motion";
import {
  Users,
  Link2,
  CalendarDays,
  RefreshCcw,
} from "lucide-react";
import Card from "../common/Card/Card";

const icons = {
  Builders: Users,
  Connections: Link2,
  Hackathons: CalendarDays,
  "Pending Sync": RefreshCcw,
};

const colors = {
  Builders: "bg-violet-100 text-violet-600",
  Connections: "bg-cyan-100 text-cyan-600",
  Hackathons: "bg-pink-100 text-pink-600",
  "Pending Sync": "bg-amber-100 text-amber-600",
};

function StatCard({ title, value }) {
  const Icon = icons[title] || Users;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
    >
      <Card className="group relative overflow-hidden">

        <div
          className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl opacity-40 ${
            title === "Builders"
              ? "bg-violet-200"
              : title === "Connections"
              ? "bg-cyan-200"
              : title === "Hackathons"
              ? "bg-pink-200"
              : "bg-amber-200"
          }`}
        />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div>

              <p className="font-['Sora'] text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                {title}
              </p>

              <motion.h2
                key={value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 font-['Poppins'] text-5xl font-bold text-[var(--text)]"
              >
                {value}
              </motion.h2>

            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors[title]}`}
            >
              <Icon size={26} />
            </div>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-sm text-[var(--text-muted)]">
              Updated just now
            </span>

            <span className="text-sm font-semibold text-[var(--primary)]">
              Live
            </span>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}

export default StatCard;