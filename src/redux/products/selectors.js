import { productFilters } from "../filters/constants";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectAllProducts = (state) => state.products.items;

export const selectFilteredProducts = createSelector(
  [selectFilter, selectAllProducts],
  (filter, products) => {
    if (filter === productFilters.ALL) {
      return products;
    }
    return products.filter((product) => product.category === filter);
  }
);
