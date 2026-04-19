import { create } from "zustand";

const useStore = create((set) => ({

    user: {name: "", email: "", age: 0},

    setUser: (newUser: { name: "", email: "", age: 0}) => set({ user: newUser }),

}));

export default useStore;