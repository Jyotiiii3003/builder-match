import { create } from "zustand";

const useSyncQueue = create((set) => ({
  queue: JSON.parse(localStorage.getItem("syncQueue") || "[]"),

  addToQueue: (action) =>
    set((state) => {
      const updated = [...state.queue, action];
      localStorage.setItem("syncQueue", JSON.stringify(updated));
      return { queue: updated };
    }),

  clearQueue: () => {
    localStorage.removeItem("syncQueue");
    set({ queue: [] });
  },
}));

export default useSyncQueue;