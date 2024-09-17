import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductFiltersState = {
  selectedColors: string[];
};

const initialState: ProductFiltersState = {
  selectedColors: [],
};

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
  },
});

export default productFiltersSlice.reducer;
export const { toggleColorFilter } = productFiltersSlice.actions;
