import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductFiltersState = {
  selectedColors: string[];
  priceRange: [number, number];
};

const initialState: ProductFiltersState = {
  selectedColors: [],
  priceRange: [700, 5000],
};

type PriceFilterPayloadAcction = [number, number];

const productFiltersSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    toggleColorFilter(state, action: PayloadAction<string>) {
      if (state.selectedColors.includes(action.payload)) {
        state.selectedColors = state.selectedColors.filter(
          (color) => color !== action.payload
        );
      } else {
        state.selectedColors.push(action.payload);
      }
    },
    changePriceFilter(state, action: PayloadAction<PriceFilterPayloadAcction>) {
      state.priceRange = action.payload;
    },
  },
});

export default productFiltersSlice.reducer;
export const { toggleColorFilter, changePriceFilter } =
  productFiltersSlice.actions;
