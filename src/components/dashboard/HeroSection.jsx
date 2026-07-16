import { motion } from "framer-motion";
import { ArrowRight, ScanLine } from "lucide-react";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(139,124,248,0.08)] lg:px-14 lg:py-14"
    >
      {/* Background blobs */}

      <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
        {/* Left */}

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700"
          >
            Builder Match • Genesis Challenge
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-7 font-['Poppins'] text-5xl font-bold leading-tight text-[var(--text)] lg:text-6xl"
          >
            Meet builders.
            <br />
            Create teams.
            <br />
            Win hackathons.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[var(--text-muted)]"
          >
            Discover developers, designers and Web3 innovators around you.
            Build teams instantly, scan builder badges and collaborate
            seamlessly even with unstable internet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button onClick={() => navigate("/builders")}>
  Explore Builders
  <ArrowRight size={18} className="ml-2" />
</Button>

<Button
  variant="secondary"
  onClick={() => navigate("/scanner")}
>
  <ScanLine size={18} className="mr-2" />
  Scan Builder
</Button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6">
            <div>
              <p className="font-['Sora'] text-3xl font-bold text-[var(--text)]">
                5K+
              </p>

              <p className="text-sm text-[var(--text-muted)]">
                Active Builders
              </p>
            </div>

            <div>
              <p className="font-['Sora'] text-3xl font-bold text-[var(--text)]">
                120+
              </p>

              <p className="text-sm text-[var(--text-muted)]">
                Hackathons
              </p>
            </div>

            <div>
              <p className="font-['Sora'] text-3xl font-bold text-[var(--text)]">
                97%
              </p>

              <p className="text-sm text-[var(--text-muted)]">
                Match Success
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="space-y-5">
            {/* Card 1 */}

            <div className="ml-auto w-80 rounded-3xl border border-[var(--border)] bg-violet-50 p-6 shadow-md">
              <p className="font-['Sora'] text-xl font-semibold">
                Frontend Engineer
              </p>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                React • Next • Tailwind
              </p>

              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs">
                  Available
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs">
                  Delhi
                </span>
              </div>
            </div>

            {/* Card 2 */}

            <div className="w-72 rounded-3xl border border-[var(--border)] bg-cyan-50 p-6 shadow-md">
              <p className="font-['Sora'] text-xl font-semibold">
                Blockchain Dev
              </p>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Solidity • Rust
              </p>

              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs">
                  Looking for AI
                </span>
              </div>
            </div>

            {/* Card 3 */}

            <div className="ml-12 w-72 rounded-3xl border border-[var(--border)] bg-pink-50 p-6 shadow-md">
              <p className="font-['Sora'] text-xl font-semibold">
                UI / UX Designer
              </p>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Figma • Design Systems
              </p>

              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs">
                  Team Ready
                </span>
              </div>
            </div>
          </div>

          {/* Floating circles */}

          <div className="absolute -left-10 top-16 h-5 w-5 rounded-full bg-violet-400" />

          <div className="absolute right-6 top-40 h-4 w-4 rounded-full bg-cyan-400" />

          <div className="absolute left-24 bottom-8 h-6 w-6 rounded-full bg-pink-300" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;