import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Moon,
  Sun,
  Bell,
  Wifi,
  Smartphone,
  ShieldCheck,
  Info,
} from "lucide-react";

import Card from "../../components/common/Card/Card";
import SectionHeading from "../../components/common/SectionHeading/SectionHeading";
import Button from "../../components/common/Button/Button";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [offlineSync, setOfflineSync] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <SectionHeading
        title="Settings"
        subtitle="Customize your Builder Match experience."
      />

      {/* Profile */}

      <Card>

        <div className="flex items-center gap-3">

          <User className="text-[var(--primary)]" />

          <h2 className="font-['Sora'] text-2xl font-bold">
            Profile
          </h2>

        </div>

        <div className="mt-6 space-y-4">

          <input
            value="ABC"
            readOnly
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4"
          />

          <input
            value="Frontend Builder"
            readOnly
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4"
          />

        </div>

      </Card>

      {/* Appearance */}

      <Card>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            {darkMode ? (
              <Moon className="text-[var(--primary)]" />
            ) : (
              <Sun className="text-[var(--primary)]" />
            )}

            <div>

              <h3 className="font-semibold">
                Appearance
              </h3>

              <p className="text-sm text-[var(--text-muted)]">
                Switch between light and dark themes.
              </p>

            </div>

          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative h-8 w-16 rounded-full transition ${
              darkMode
                ? "bg-[var(--primary)]"
                : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                darkMode
                  ? "left-9"
                  : "left-1"
              }`}
            />
          </button>

        </div>

      </Card>

      {/* Notifications */}

      <Card>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Bell className="text-[var(--primary)]" />

            <div>

              <h3 className="font-semibold">
                Notifications
              </h3>

              <p className="text-sm text-[var(--text-muted)]">
                Receive builder connection updates.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
            className="h-5 w-5 accent-[var(--primary)]"
          />

        </div>

      </Card>

      {/* Offline */}

      <Card>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Wifi className="text-[var(--primary)]" />

            <div>

              <h3 className="font-semibold">
                Offline Sync
              </h3>

              <p className="text-sm text-[var(--text-muted)]">
                Queue actions while offline.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            checked={offlineSync}
            onChange={() =>
              setOfflineSync(!offlineSync)
            }
            className="h-5 w-5 accent-[var(--primary)]"
          />

        </div>

      </Card>

      {/* Device */}

      <Card>

        <div className="flex items-center gap-4">

          <Smartphone className="text-[var(--primary)]" />

          <div>

            <h3 className="font-semibold">
              Progressive Web App
            </h3>

            <p className="text-sm text-[var(--text-muted)]">
              Optimized for mobile devices and offline usage.
            </p>

          </div>

        </div>

      </Card>

      {/* Security */}

      <Card>

        <div className="flex items-center gap-4">

          <ShieldCheck className="text-green-600" />

          <div>

            <h3 className="font-semibold">
              Secure Builder Identity
            </h3>

            <p className="text-sm text-[var(--text-muted)]">
              QR scans are processed locally.
            </p>

          </div>

        </div>

      </Card>

      {/* About */}

      <Card>

        <div className="flex items-center gap-4">

          <Info className="text-[var(--primary)]" />

          <div>

            <h3 className="font-semibold">
              Builder Match
            </h3>

            <p className="text-sm text-[var(--text-muted)]">
              Version 1.0.0
            </p>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Built for the Genesis Frontend Engineering Challenge.
            </p>

          </div>

        </div>

      </Card>

      <Button className="w-full py-4">
        Save Preferences
      </Button>

    </motion.div>
  );
}

export default Settings;