import { CalendarDays, Users, ArrowRight } from "lucide-react";
import Card from "../common/Card/Card";

function EventCard({ event }) {
  return (
    <Card className="group cursor-pointer">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
        Upcoming Event
      </p>

      <h3 className="mt-3 font-['Poppins'] text-2xl font-semibold">
        {event.title}
      </h3>

      <div className="mt-6 space-y-2 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          {event.date}
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {event.participants} Builders Joined
        </div>
      </div>

      <button className="mt-8 flex items-center gap-2 font-medium text-[var(--primary)]">
        View Details
        <ArrowRight size={16} />
      </button>
    </Card>
  );
}

export default EventCard;