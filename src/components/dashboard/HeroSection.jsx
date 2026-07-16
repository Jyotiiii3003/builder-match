import { ArrowRight, ScanLine } from "lucide-react";
import Button from "../common/Button/Button";

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-[var(--primary)]">
          Builder Match
        </p>

        <h1 className="mt-4 font-['Poppins'] text-5xl font-bold leading-tight text-[var(--text)]">
          Build your next winning hackathon team.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          Discover developers, designers and Web3 builders around you.
          Connect instantly and build together.
        </p>

        <div className="mt-8 flex gap-4">
          <Button>
            Explore Builders
          </Button>

          <Button variant="secondary">
            <ScanLine size={18} className="mr-2 inline" />
            Scan Badge
          </Button>
        </div>
      </div>

      <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[var(--primary-light)] blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 right-10">
        <ArrowRight
          size={120}
          className="text-[var(--primary)] opacity-10"
        />
      </div>
    </div>
  );
}

export default HeroSection;