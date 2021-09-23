import create from "zustand";

//state for logged in user state
export const useLoggedInState = create((set) => ({
  isloggedIn: false,
  setIsLoggedIn: (newState) => set({ isloggedIn: newState }),
}));

//state for express user details
export const useExpressUserState = create((set) => ({
  expressUserData: {},
  setExpressUserData: (newState) => set({ expressUserData: { ...newState } }),
}));

//state for portal user details
export const usePortalUserState = create((set) => ({
  portalUserData: {},
  setPortalUserData: (newState) => set({ portalUserData: { ...newState } }),
}));
