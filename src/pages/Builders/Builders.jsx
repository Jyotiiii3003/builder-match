import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Search, SlidersHorizontal } from "lucide-react";

import BuilderCard from "../../components/builders/BuilderCard";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import builders from "../../data/builders";

const skills = [
  "All",
  "React",
  "Node.js",
  "Solidity",
  "Python",
  "Flutter",
];

function Builders() {
  const parentRef = useRef(null);

  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredBuilders = useMemo(() => {
    let data = [...builders];

    data = data.filter((builder) => {
      const matchesSearch =
        builder.name.toLowerCase().includes(search.toLowerCase()) ||
        builder.role.toLowerCase().includes(search.toLowerCase()) ||
        builder.skills.join(" ").toLowerCase().includes(search.toLowerCase());

      const matchesSkill =
        selectedSkill === "All" ||
        builder.skills.includes(selectedSkill);

      return matchesSearch && matchesSkill;
    });

    data.sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : a.role.localeCompare(b.role)
    );

    return data;
  }, [search, selectedSkill, sortBy]);

  const rowVirtualizer = useVirtualizer({
    count: filteredBuilders.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 360,
    overscan: 12,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <SectionHeading
        title="Meet Builders"
        subtitle="Discover talented developers, designers and Web3 builders."
      />

      <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">

          <div className="relative w-full lg:max-w-lg">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search builders..."
              className="w-full rounded-2xl border px-12 py-4 outline-none"
            />

          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-2xl border px-4 py-3"
          >
            <option value="name">Sort by Name</option>
            <option value="role">Sort by Role</option>
          </select>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`rounded-full px-5 py-2 text-sm ${
                selectedSkill === skill
                  ? "bg-[var(--primary)] text-white"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              {skill}
            </button>
          ))}

        </div>

      </div>

      <div className="flex items-center justify-between">

        <p>
          Showing <strong>{filteredBuilders.length}</strong> builders
        </p>

        <div className="flex items-center gap-2 text-sm">

          <SlidersHorizontal size={16} />

          Virtualized List

        </div>

      </div>

      <div
        ref={parentRef}
        className="h-[80vh] overflow-y-auto rounded-3xl"
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
                ref={rowVirtualizer.measureElement}
                data-index={virtualRow.index}
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

    </motion.div>
  );
}

export default Builders;