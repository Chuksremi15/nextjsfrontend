import create from "zustand";

//state for categories
export const useCategoriesState = create((set) => ({
  categories: [],
  setCategories: (newState) => set({ categories: newState }),
}));
