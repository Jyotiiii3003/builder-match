import { CalendarDays, Users, ArrowRight } from "lucide-react";
import Card from "../common/Card/Card";

function EventCard({ event }) {
  return (
    <Card className="group hover:border-[var(--primary)] cursor-pointer">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${event.color}`}
      >
        {event.mode}
      </div>

      <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold text-[var(--text)]">
        {event.title}
      </h3>

      <div className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          {event.date}
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {event.participants} Builders Joined
        </div>
      </div>

      <button className="mt-8 flex items-center gap-2 font-medium text-[var(--primary)] transition group-hover:gap-3">
        View Event
        <ArrowRight size={16} />
      </button>
    </Card>
  );
}

export default EventCard;