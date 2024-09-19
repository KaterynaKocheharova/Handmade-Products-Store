import { createSelector } from "@reduxjs/toolkit";
import {
  selectPriceFilter,
  selectColorFilters,
} from "../productFilters/productFiltersSelectors";

export const selectAllProducts = (state) => state.products.items;

export const selectProductById = (productId) => (state) =>
  state.products.items.find((item) => item.id === productId);

export const selectFilteredProducts = (category) =>
  createSelector(
    [selectAllProducts, selectPriceFilter, selectColorFilters],
    (products, [minPrice, maxPrice], colorFilters) =>
      products.filter(
        ({ category: prodCategory, new_price, colors }) =>
          prodCategory === category &&
          new_price >= minPrice &&
          new_price <= maxPrice &&
          (colorFilters.length === 0 ||
            colors.some((color) => colorFilters.includes(color)))
      )
  );
