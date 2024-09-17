import { createSelector } from "@reduxjs/toolkit";
import { selectAllProductFilters } from "../productFilters/productFiltersSelectors";

export const selectAllProducts = (state) => state.products.items;

export const selectProductById = (productId) => (state) =>
  state.products.items.find((item) => item.id === productId);

export const selectProductsByCategory = (category) =>
  createSelector([selectAllProducts], (products) =>
    products.filter((product) => product.category === category)
  );

export const selectFilteredProducts = createSelector(
  [selectProductsByCategory, selectAllProductFilters],
  (products, filters) => {
    if (filters.selectedColors.length >= 0) {
      return products.filter((product) => {
        product.colors.filter((color) =>
          filters.selectedColors.includes(color)
        );
      });
    }
  }
);
