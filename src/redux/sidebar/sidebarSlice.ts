import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarType = "cart" | "filtration" | null;

type SidebarState = {
  isCartSidebarOpen: boolean;
  isFiltrationSidebarOpen: boolean;
};

const initialState: SidebarState = {
  isCartSidebarOpen: false,
  isFiltrationSidebarOpen: false,
};

type SidebarPayload = {
  type: SidebarType;
  forceClose?: boolean;  // Optional flag to explicitly close the sidebar
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<SidebarPayload>) {
      const { type, forceClose } = action.payload;
      switch (type) {
        case "cart":
          state.isCartSidebarOpen = forceClose ? false : !state.isCartSidebarOpen;
          break;
        case "filtration":
          state.isFiltrationSidebarOpen = forceClose ? false : !state.isFiltrationSidebarOpen;
          break;
      }
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSidebar } = sidebarSlice.actions;
