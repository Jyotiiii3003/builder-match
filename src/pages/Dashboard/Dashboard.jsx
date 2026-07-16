import { motion } from "framer-motion";
import HeroSection from "../../components/dashboard/HeroSection";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import StatCard from "../../components/dashboard/StatCard";
import EventCard from "../../components/dashboard/EventCard";
import BuilderCard from "../../components/builders/BuilderCard";

import builders from "../../data/builders";
import events from "../../data/events";

import useBuilderStore from "../../store/useBuilderStore";
import useSyncQueue from "../../store/useSyncQueue";

function Dashboard() {
  const { connectedBuilders } = useBuilderStore();
  const { queue } = useSyncQueue();

  const featuredBuilders = builders.slice(0, 6);

  const stats = [
    {
      title: "Builders",
      value: builders.length.toLocaleString(),
    },
    {
      title: "Connections",
      value: connectedBuilders.length,
    },
    {
      title: "Hackathons",
      value: events.length,
    },
    {
      title: "Pending Sync",
      value: queue.length,
    },
  ];

  return (
    <motion.div
      className="space-y-14 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <HeroSection />

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <SectionHeading
          title="Platform Insights"
          subtitle="Everything happening inside your builder network."
        />

        <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <SectionHeading
          title="Trending Hackathons"
          subtitle="Join communities that are actively building."
        />

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <SectionHeading
          title="Featured Builders"
          subtitle="People you may want on your next hackathon team."
        />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredBuilders.map((builder) => (
            <BuilderCard
              key={builder.id}
              builder={builder}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <SectionHeading
          title="Community Activity"
          subtitle="Recent builder activity across Genesis."
        />

        <div className="mt-6 space-y-4">

          <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
            <p className="font-medium text-[var(--text)]">
              Aarav Sharma connected with Sarah Khan
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              2 minutes ago
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
            <p className="font-medium text-[var(--text)]">
              Genesis Summer Hack reached 250 builders.
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              15 minutes ago
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
            <p className="font-medium text-[var(--text)]">
              New AI Builder joined the community.
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              1 hour ago
            </p>
          </div>

        </div>
      </motion.section>
    </motion.div>
  );
}

export default Dashboard;