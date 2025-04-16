import { create } from "zustand";

const useStore = create((set) => ({
  user: {},
  updateUser: (newUser) => set({ user: newUser }),
}));

export { useStore };
