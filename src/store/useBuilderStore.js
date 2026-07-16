import { create } from "zustand";
import useSyncQueue from "./useSyncQueue";
const useBuilderStore = create((set) => ({
  connectedBuilders: [],

  connectBuilder: async (id) => {
  set((state) => ({
    connectedBuilders: [...state.connectedBuilders, id],
  }));

  if (!navigator.onLine) {
    useSyncQueue.getState().addToQueue({
      type: "CONNECT",
      builderId: id,
      timestamp: Date.now(),
    });

    return;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (Math.random() < 0.2) {
      throw new Error();
    }
  } catch {
    set((state) => ({
      connectedBuilders: state.connectedBuilders.filter(
        (builderId) => builderId !== id
      ),
    }));
  }
},
}));

export default useBuilderStore;