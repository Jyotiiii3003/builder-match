import { useMemo, useState } from "react";
import BuilderCard from "../../components/builders/BuilderCard";
import builders from "../../data/builders";

function Builders() {
  const [search, setSearch] = useState("");

  const filteredBuilders = useMemo(() => {
    return builders.filter((builder) =>
      builder.name.toLowerCase().includes(search.toLowerCase()) ||
      builder.role.toLowerCase().includes(search.toLowerCase()) ||
      builder.skills.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="font-['Poppins'] text-4xl font-bold">
          Builder Directory
        </h1>

        <p className="mt-2 text-[var(--text-muted)]">
          Search and connect with builders.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search by name, role or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl border border-[var(--border)] bg-white px-5 py-4 outline-none focus:border-[var(--primary)]"
      />

      <div className="grid grid-cols-3 gap-6">
        {filteredBuilders.map((builder) => (
          <BuilderCard
            key={builder.id}
            builder={builder}
          />
        ))}
      </div>

    </div>
  );
}

export default Builders;