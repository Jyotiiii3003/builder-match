import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { ScanLine, CheckCircle } from "lucide-react";

function Scanner() {
  const [scanResult, setScanResult] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
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
  }, []);

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="font-['Poppins'] text-4xl font-bold">
        Scan Builder Badge
      </h1>

      <p className="mt-2 text-[var(--text-muted)]">
        Scan a builder QR code to connect instantly.
      </p>

      <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white p-6">

        {!scanResult ? (
          <>
            <div
              id="reader"
              className="overflow-hidden rounded-2xl"
            />

            <div className="mt-6 flex items-center justify-center gap-2 text-[var(--text-muted)]">
              <ScanLine size={18} />
              Position the QR code inside the frame
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center py-12">

            <CheckCircle
              size={60}
              className="text-green-500"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              Scan Successful
            </h2>

            <p className="mt-3 rounded-xl bg-slate-100 px-4 py-2 text-sm">
              {scanResult}
            </p>

            <button
              className="mt-8 rounded-2xl bg-[var(--primary)] px-6 py-3 text-white"
              onClick={() => window.location.reload()}
            >
              Scan Again
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Scanner;