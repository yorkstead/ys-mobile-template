import { create } from "zustand";
interface Preferences {
  visits: number;
  increment: () => void;
}
export const usePreferences = create<Preferences>((set) => ({
  visits: 0,
  increment: () => set((state) => ({ visits: state.visits + 1 })),
}));
