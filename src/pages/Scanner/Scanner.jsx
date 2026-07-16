import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion } from "framer-motion";
import {
  ScanLine,
  CheckCircle,
  Camera,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

function Scanner() {
  const [scanResult, setScanResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [cameraError, setCameraError] = useState("");

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Initialize scanner AFTER loading is complete
  useEffect(() => {
    if (loading || scanResult) return;

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 260,
          height: 260,
        },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        scanner.clear();
      },
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [loading, scanResult]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <div>
        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          Native Camera
        </span>

        <h1 className="mt-5 font-['Poppins'] text-5xl font-bold">
          Scan Builder Badge
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-[var(--text-muted)]">
          Quickly connect with other builders by scanning their QR badge.
          Designed to work smoothly during hackathons.
        </p>
      </div>

      <div className="rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-sm">

        {/* Reader always exists */}
        <div
          id="reader"
          className={loading || scanResult ? "hidden" : "overflow-hidden rounded-3xl"}
        />

        {loading && (
          <div className="flex flex-col items-center py-20">

            <div className="h-14 w-14 animate-spin rounded-full border-4 border-violet-200 border-t-violet-500" />

            <p className="mt-6 text-[var(--text-muted)]">
              Initializing Camera...
            </p>

          </div>
        )}

        {!loading && cameraError && (
          <div className="flex flex-col items-center py-20">

            <Camera
              size={60}
              className="text-red-500"
            />

            <h2 className="mt-6 text-3xl font-semibold">
              Camera Unavailable
            </h2>

            <p className="mt-3 text-center text-[var(--text-muted)]">
              {cameraError}
            </p>

          </div>
        )}

        {!loading && !cameraError && !scanResult && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-violet-50 p-5">

              <ScanLine className="text-violet-600" />

              <h3 className="mt-4 font-semibold">
                Scan Badge
              </h3>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Align the QR code inside the frame.
              </p>

            </div>

            <div className="rounded-2xl bg-cyan-50 p-5">

              <ShieldCheck className="text-cyan-600" />

              <h3 className="mt-4 font-semibold">
                Secure
              </h3>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                QR data is processed locally.
              </p>

            </div>

            <div className="rounded-2xl bg-pink-50 p-5">

              <Camera className="text-pink-600" />

              <h3 className="mt-4 font-semibold">
                Fast
              </h3>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Optimized for quick builder matching.
              </p>

            </div>

          </div>
        )}

        {scanResult && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center py-14"
          >

            <CheckCircle
              size={72}
              className="text-green-500"
            />

            <h2 className="mt-6 font-['Sora'] text-3xl font-bold">
              Builder Connected
            </h2>

            <p className="mt-3 text-center text-[var(--text-muted)]">
              QR Code scanned successfully.
            </p>

            <div className="mt-8 w-full rounded-2xl bg-slate-100 p-4 text-center break-all">
              {scanResult}
            </div>

            <button
              onClick={() => {
                setScanResult("");
                setLoading(true);

                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }}
              className="mt-10 flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              <RotateCcw size={18} />
              Scan Again
            </button>

          </motion.div>
        )}

      </div>
    </motion.div>
  );
}

export default Scanner;