import { RootState } from "../store";

type SelectColorFilters = (state: RootState) => string[];
type SelectAllProductFilters = (state: RootState) => {
  selectedColors: string[];
};

export const selectColorFilters: SelectColorFilters = (state) =>
  state.productFilters.selectedColors;
export const selectAllProductFilters: SelectAllProductFilters = (state) =>
  state.productFilters;
