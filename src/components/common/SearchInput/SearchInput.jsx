import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="flex items-center rounded-2xl border border-[var(--border)] bg-white px-4 py-3">

      <Search
        size={18}
        className="text-[var(--text-muted)]"
      />

      <input
        placeholder="Search builders..."
        className="ml-3 w-full bg-transparent outline-none"
      />

    </div>
  );
}

export default SearchInput;