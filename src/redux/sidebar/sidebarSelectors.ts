import { RootState } from "../store";

type SelectIsSidebarOpen = (state: RootState) => boolean;

export const selectIsCartSidebarOpen: SelectIsSidebarOpen = (state) =>
  state.sidebar.isCartSidebarOpen;

export const selectIsFiltrationSidebarOpen: SelectIsSidebarOpen = (state) =>
  state.sidebar.isFiltrationSidebarOpen;
