import { motion } from "framer-motion";

function SectionHeading({
  title,
  subtitle,
  action,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
      className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <div>

        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
          Discover
        </span>

        <h2 className="mt-4 font-['Sora'] text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          {subtitle}
        </p>

      </div>

      {action && (
        <button className="rounded-2xl border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]">
          {action}
        </button>
      )}
    </motion.div>
  );
}

export default SectionHeading;