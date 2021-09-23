import create from "zustand";

export const useTopUpNavState = create((set) => ({
  topUpNavState: false,
  toggleTopUpNav: (newState) => set({ topUpNavState: newState }),
}));
export const useWithDrawalNavState = create((set) => ({
  WithDrawalNavState: false,
  toggleWithDrawalNav: (newState) => set({ WithDrawalNavState: newState }),
}));
//state for manual transfer slip modal
export const usePayNoteState = create((set) => ({
  payNoteState: false,
  togglePayNoteNav: (newState) => set({ payNoteState: newState }),
}));
export const useSetPinState = create((set) => ({
  setPinState: false,
  toggleSetPinNav: (newState) => set({ setPinState: newState }),
}));
//state for toggling bank detail form on payment option component
export const useEditBankState = create((set) => ({
  editBankState: false,
  setEditBankState: (newState) => set({ editBankState: newState }),
}));
//state for settings tabs and component to render on express page
export const useExpressSetTabState = create((set) => ({
  currentId: 0,
  setCurrentId: (newState) => set({ currentId: newState }),
}));
//state for settings tabs and component to render on portal page
export const usePortalSetTabState = create((set) => ({
  currentId: 0,
  setCurrentId: (newState) => set({ currentId: newState }),
}));
//state for snackbar notification state
export const useSnackState = create((set) => ({
  open: true,
  setOpen: (newState) => set({ open: newState }),
}));
//state to check if user is on portal page
export const usePortalPageState = create((set) => ({
  onPortal: false,
  setOnPortal: (newState) => set({ onPortal: newState }),
}));

//state for side page navigation
export const usePageNavState = create((set) => ({
  openPageNav: false,
  setOpenPageNav: (newState) => set({ openPageNav: newState }),
}));
//state for side inventory page navigation ie cart, and checkout components
export const useInventNavState = create((set) => ({
  openInventNav: false,
  setOpenInventNav: (newState) => set({ openInventNav: newState }),
}));
//state for side notification components
export const useNoteNavState = create((set) => ({
  openNoteNav: false,
  setNoteNav: (newState) => set({ openNoteNav: newState }),
}));
//state for order arrival modal
export const useOrderModalState = create((set) => ({
  openOrderModalNav: false,
  setOrderModalNav: (newState) => set({ openOrderModalNav: newState }),
}));
