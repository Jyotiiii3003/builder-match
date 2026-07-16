import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import builders from "../../data/builders";
import useBuilderStore from "../../store/useBuilderStore";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

function Team() {
  const { connectedBuilders } = useBuilderStore();

  const members = builders.filter((builder) =>
    connectedBuilders.includes(builder.id)
  );

  const progress = Math.min((members.length / 5) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <SectionHeading
        title="Your Hackathon Team"
        subtitle="Build the perfect team before the next Genesis event."
      />

      <Card>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Trophy className="text-[var(--primary)]" />

              <h2 className="font-['Sora'] text-3xl font-bold">
                Team Progress
              </h2>

            </div>

            <p className="mt-4 text-[var(--text-muted)]">
              {members.length} of 5 builders connected
            </p>

            <div className="mt-6 h-3 w-full max-w-md overflow-hidden rounded-full bg-violet-100">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.7 }}
                className="h-full rounded-full bg-[var(--primary)]"
              />

            </div>

          </div>

          <div className="text-center">

            <p className="font-['Poppins'] text-6xl font-bold text-[var(--primary)]">
              {members.length}
            </p>

            <p className="text-sm text-[var(--text-muted)]">
              Connected Builders
            </p>

          </div>

        </div>

      </Card>

      {members.length === 0 ? (

        <Card>

          <div className="py-16 text-center">

            <Users
              size={70}
              className="mx-auto text-violet-500"
            />

            <h2 className="mt-6 font-['Sora'] text-3xl font-bold">
              No Team Yet
            </h2>

            <p className="mt-4 text-[var(--text-muted)]">
              Connect with builders to start forming your team.
            </p>

          </div>

        </Card>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {members.map((member) => (

            <motion.div
              key={member.id}
              whileHover={{
                y: -5,
              }}
            >
              <Card>

                <div className="flex items-center gap-4">

                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-16 w-16 rounded-2xl"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-sm text-[var(--text-muted)]">
                      {member.role}
                    </p>

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {member.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-green-600">

                    <CheckCircle2 size={18} />

                    Ready

                  </div>

                  <Sparkles
                    size={18}
                    className="text-[var(--primary)]"
                  />

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

      )}

      <Button className="w-full py-4">
        Ready For Genesis Hackathon
      </Button>

    </motion.div>
  );
}

export default Team;