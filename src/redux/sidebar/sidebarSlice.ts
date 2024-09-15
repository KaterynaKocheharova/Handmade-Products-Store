import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarType = "cart" | "filtration" | null;

type SidebarState = {
  isCartSidebarOpen: boolean;
  isFiltrationSidebarOpen: boolean;
};

type SidebarPayload = {
  type: SidebarType;
};

const initialState: SidebarState = {
  isCartSidebarOpen: false,
  isFiltrationSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<SidebarPayload>) {
      const { type } = action.payload;
      switch (type) {
        case "cart":
          state.isCartSidebarOpen = !state.isCartSidebarOpen;
          break;
        case "filtration":
          state.isFiltrationSidebarOpen = !state.isFiltrationSidebarOpen;
          break;
      }
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSidebar } = sidebarSlice.actions;
