import { createSlice } from "@reduxjs/toolkit";
import { productFilters } from "./constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: productFilters.ALL,
  },
  reducers: {
    changeFilter(state, {payload}) {
      state.filter = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {changeFilter} = filtersSlice.actions;
