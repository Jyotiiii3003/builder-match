import { Bell, Search } from "lucide-react";
import SearchInput from "../common/SearchInput/SearchInput";
import useSyncQueue from "../../store/useSyncQueue";
function Header() {
  const { queue } = useSyncQueue.getState();
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)] px-10 xl:px-14">

      <div>
        <h2 className="font-['Poppins'] text-3xl font-semibold text-[var(--text)]">
          Good Afternoon
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Find your next teammate.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <SearchInput />

        <button className="rounded-2xl border border-[var(--border)] bg-white p-3 transition hover:shadow-lg">

          <Bell size={20} />

        </button>

      </div>

      {queue.length > 0 && (
  <div className="rounded-xl bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
    {queue.length} pending sync
  </div>
)}
    </header>
  );
}

export default Header;