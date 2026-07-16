import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  MapPin,
  ArrowRight,
  Trophy,
} from "lucide-react";

import Card from "../common/Card/Card";

const accent = {
  Online: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },
  Hybrid: {
    bg: "bg-cyan-100",
    text: "text-cyan-700",
    dot: "bg-cyan-500",
  },
  Offline: {
    bg: "bg-pink-100",
    text: "text-pink-700",
    dot: "bg-pink-500",
  },
};

function EventCard({ event }) {
  const style = accent[event.mode] || accent.Online;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
      }}
    >
      <Card className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-100 blur-3xl opacity-50" />

        <div className="relative">

          {/* Top */}

          <div className="flex items-start justify-between">

            <div>

              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.text}`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${style.dot}`}
                />

                {event.mode}
              </span>

              <h2 className="mt-5 font-['Poppins'] text-3xl font-bold text-[var(--text)]">
                {event.title}
              </h2>

            </div>

            <div className="rounded-2xl bg-violet-100 p-3">

              <Trophy
                size={22}
                className="text-violet-600"
              />

            </div>

          </div>

          {/* Details */}

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">

              <CalendarDays
                size={18}
                className="text-violet-500"
              />

              <span className="text-[var(--text-muted)]">
                {event.date}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Users
                size={18}
                className="text-violet-500"
              />

              <span className="text-[var(--text-muted)]">
                {event.participants} Builders Registered
              </span>

            </div>

            <div className="flex items-center gap-3">

              <MapPin
                size={18}
                className="text-violet-500"
              />

              <span className="text-[var(--text-muted)]">
                Global Community
              </span>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                Registration
              </p>

              <p className="mt-1 font-semibold text-green-600">
                Open
              </p>

            </div>

            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white"
            >
              View Event

              <ArrowRight size={18} />

            </motion.button>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}

export default EventCard;