import { useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import BuilderCard from "../../components/builders/BuilderCard";
import builders from "../../data/builders";

function Builders() {
  const [search, setSearch] = useState("");

  const parentRef = useRef(null);

  const filteredBuilders = useMemo(() => {
    return builders.filter(
      (builder) =>
        builder.name.toLowerCase().includes(search.toLowerCase()) ||
        builder.role.toLowerCase().includes(search.toLowerCase()) ||
        builder.skills.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const rowVirtualizer = useVirtualizer({
    count: filteredBuilders.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 290,
    overscan: 5,
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="font-['Poppins'] text-4xl font-bold">
          Builder Directory
        </h1>

        <p className="mt-2 text-[var(--text-muted)]">
          Showing {filteredBuilders.length} builders
        </p>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search builders..."
        className="w-full rounded-2xl border border-[var(--border)] bg-white px-5 py-4 outline-none"
      />

      <div
        ref={parentRef}
        className="h-[700px] overflow-auto rounded-3xl"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const builder = filteredBuilders[virtualRow.index];

            return (
              <div
                key={builder.id}
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <BuilderCard builder={builder} />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default Builders;