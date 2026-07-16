import { Search, Bell, Wifi, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Header() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineHandler = () => setOnline(true);
    const offlineHandler = () => setOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-8 py-6">

        {/* Left */}

        <div>

          <h2 className="font-['Poppins'] text-3xl font-bold text-[var(--text)]">
            {greeting}
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Build your next winning hackathon team.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div className="relative hidden md:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />

            <input
              placeholder="Search..."
              className="w-72 rounded-2xl border border-[var(--border)] bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[var(--primary)]"
            />

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">

            <Bell size={19} />

          </div>

          <div
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
              online
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >

            {online ? (
              <Wifi size={16} />
            ) : (
              <WifiOff size={16} />
            )}

            {online ? "Online" : "Offline"}

          </div>

        </div>

      </div>
    </motion.header>
  );
}

export default Header;