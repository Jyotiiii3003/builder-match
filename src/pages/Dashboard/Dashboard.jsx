import HeroSection from "../../components/dashboard/HeroSection";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import StatCard from "../../components/dashboard/StatCard";
import BuilderCard from "../../components/builders/BuilderCard";
import builders from "../../data/builders";
import EventCard from "../../components/dashboard/EventCard";
import events from "../../data/events";

function Dashboard() {
  return (
    <div className="space-y-12">

      <HeroSection />

      <section>
        <SectionHeading
          title="Platform Overview"
          subtitle="Your activity at a glance."
        />

        <div className="grid grid-cols-4 gap-6">
          <StatCard title="Builders" value="2,540" />
          <StatCard title="Connections" value="18" />
          <StatCard title="Events" value="12" />
          <StatCard title="Pending Sync" value="4" />
        </div>
      </section>

      <section>
  <SectionHeading
    title="Trending Hackathons"
    subtitle="Find events and start building with your next team."
  />

  <div className="grid grid-cols-2 gap-6">
    {events.map((event) => (
      <EventCard
        key={event.id}
        event={event}
      />
    ))}
  </div>
</section>


      <section>
        <SectionHeading
          title="Featured Builders"
          subtitle="Recommended for your next hackathon."
        />

        <div className="grid grid-cols-3 gap-6">
          {builders.map((builder) => (
            <BuilderCard
              key={builder.id}
              builder={builder}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;