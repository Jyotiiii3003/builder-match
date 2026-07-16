import Button from "../../components/common/Button/Button";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

import StatCard from "../../components/dashboard/StatCard";
import BuilderCard from "../../components/builders/BuilderCard";

import builders from "../../data/builders";

function Dashboard() {
  return (
    <div>

      <SectionHeading
        title="Find your next hackathon teammate"
        subtitle="Discover developers, designers and blockchain builders for your next event."
      />

      <div className="mt-8 flex gap-4">

        <Button>
          Explore Builders
        </Button>

        <Button variant="secondary">
          Scan Builder QR
        </Button>

      </div>

      <div className="mt-10 grid grid-cols-4 gap-6">

        <StatCard title="Builders" value="2,540" />
        <StatCard title="Connections" value="18" />
        <StatCard title="Events" value="12" />
        <StatCard title="Pending Sync" value="4" />

      </div>

      <div className="mt-14">

        <SectionHeading
          title="Featured Builders"
          subtitle="Recommended based on your interests."
        />

        <div className="grid grid-cols-3 gap-6">

          {builders.map((builder) => (
            <BuilderCard
              key={builder.id}
              builder={builder}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;