import { RootState } from "../store";

type SelectColorFilters = (state: RootState) => string[];
type SelectAllProductFilters = (state: RootState) => {
  selectedColors: string[];
};
type SelectPriceFilter = (state: RootState) => [number, number];

export const selectColorFilters: SelectColorFilters = (state) =>
  state.productFilters.selectedColors;

export const selectAllProductFilters: SelectAllProductFilters = (state) =>
  state.productFilters;

export const selectPriceFilter: SelectPriceFilter = (state) =>
  state.productFilters.priceRange;
