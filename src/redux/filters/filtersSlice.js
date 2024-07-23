import { createSlice } from "@reduxjs/toolkit";
import { productFilters } from "./constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: productFilters.ALL,
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
