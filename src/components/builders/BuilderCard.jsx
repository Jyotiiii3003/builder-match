import {
  MapPin,
  BriefcaseBusiness,
  CircleCheck,
  Github,
} from "lucide-react";

import Card from "../common/Card/Card";
import Button from "../common/Button/Button";

function BuilderCard({ builder }) {
  return (
    <Card className="group">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <img
            src={builder.avatar}
            alt={builder.name}
            className="h-16 w-16 rounded-2xl border border-[var(--border)]"
          />

          <div>
            <h3 className="font-['Poppins'] text-xl font-semibold text-[var(--text)]">
              {builder.name}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <BriefcaseBusiness size={14} />
              {builder.role}
            </div>

            <div className="mt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin size={14} />
              {builder.location}
            </div>

          </div>

        </div>

        <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
          <CircleCheck size={12} />
          Available
        </span>

      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {builder.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">

        <button className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
          <Github size={18} />
          Portfolio
        </button>

        <Button className="px-5 py-2">
          Connect
        </Button>

      </div>

    </Card>
  );
}

export default BuilderCard;