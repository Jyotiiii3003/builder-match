import { create } from "zustand";

const useBuilderStore = create((set) => ({
  connectedBuilders: [],

  connectBuilder: async (id) => {
    // Optimistic Update
    set((state) => ({
      connectedBuilders: [...state.connectedBuilders, id],
    }));

    try {
      // Fake API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate random failure (20%)
      if (Math.random() < 0.2) {
        throw new Error("Connection Failed");
      }
    } catch {
      // Rollback
      set((state) => ({
        connectedBuilders: state.connectedBuilders.filter(
          (builderId) => builderId !== id
        ),
      }));

      alert("Connection failed. Please try again.");
    }
  },
}));

export default useBuilderStore;