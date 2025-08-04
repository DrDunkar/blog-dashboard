import { create } from "zustand";
import { nanoid } from "nanoid";

export const useBlogStore = create((set) => ({
  items: [],

  // Fetch (simulate API)
  fetchItems: async (blogItem) => {
    set({ items: blogItem });
  },

  // Create
  addItem: (items) =>
    set((state) => ({
      items: [{ id: nanoid(), ...items }, ...state.items],
    })),

  // Update
  updateItem: (id, newName) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      ),
    })),

  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
