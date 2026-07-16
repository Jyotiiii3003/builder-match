import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import useSyncQueue from "./store/useSyncQueue";

function App() {
  const { queue, clearQueue } = useSyncQueue();

  useEffect(() => {
    const sync = async () => {
      if (!navigator.onLine || queue.length === 0) return;

      await new Promise((r) => setTimeout(r, 2000));

      clearQueue();
    };

    window.addEventListener("online", sync);

    return () => {
      window.removeEventListener("online", sync);
    };
  }, [queue, clearQueue]);

  return <AppRouter />;
}

export default App;