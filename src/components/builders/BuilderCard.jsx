import { motion } from "framer-motion";
import {
  MapPin, 
  Globe,
  Link2,
  Check,
  Clock,
} from "lucide-react";

import Button from "../common/Button/Button";
import Card from "../common/Card/Card";

import useBuilderStore from "../../store/useBuilderStore";

function BuilderCard({ builder }) {
  const { connectedBuilders, connectBuilder } = useBuilderStore();

  const connected = connectedBuilders.includes(builder.id);

  return (
    <div className="transition-transform duration-300 hover:-translate-y-2">
      <Card className="group h-full overflow-hidden">

        {/* Top */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <img
              src={builder.avatar}
              alt={builder.name}
              className="h-16 w-16 rounded-2xl border border-[var(--border)] object-cover"
            />

            <div>

              <h3 className="font-['Sora'] text-xl font-semibold text-[var(--text)]">
                {builder.name}
              </h3>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {builder.role}
              </p>

            </div>

          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Available
          </span>

        </div>

        {/* Location */}

        <div className="mt-6 flex items-center gap-2 text-sm text-[var(--text-muted)]">

          <MapPin
            size={16}
            className="text-[var(--primary)]"
          />

          {builder.location}

        </div>

        {/* Skills */}

        <div className="mt-6 flex flex-wrap gap-2">

          {builder.skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
            >
              {skill}
            </span>

          ))}

        </div>

        {/* Availability */}

        <div className="mt-6 rounded-2xl bg-[var(--primary-light)] p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold">
                Looking for Team
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Available for upcoming Genesis hackathons.
              </p>

            </div>

            <Clock
              size={18}
              className="text-[var(--primary)]"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex gap-3">

          <Button
            className="flex-1"
            variant={connected ? "secondary" : "primary"}
            onClick={() => connectBuilder(builder.id)}
          >
            {connected ? (
              <>
                <Check
                  size={16}
                  className="mr-2"
                />
                Connected
              </>
            ) : (
              <>
                <Link2
                  size={16}
                  className="mr-2"
                />
                Connect
              </>
            )}
          </Button>

          <a
            href={builder.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Globe size={18} />
          </a>

        </div>

      </Card>
    </div>
  );
}

export default BuilderCard;