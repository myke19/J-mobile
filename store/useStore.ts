import { create } from "zustand";


const useStore = create((set) => ({

    user: { name: "", email: "", age: 0 },
    name: "",
    setName: (name: string) => set({ name}),
    setUser: (newUser: { name: ""; email: ""; age: 0}) => set({ user: newUser }),

}));

export default useStore;