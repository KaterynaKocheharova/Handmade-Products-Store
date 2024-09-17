import { createSelector } from "@reduxjs/toolkit";
import { selectAllProductFilters } from "../productFilters/productFiltersSelectors";

export const selectAllProducts = (state) => state.products.items;

export const selectProductById = (productId) => (state) =>
  state.products.items.find((item) => item.id === productId);

  export const selectProductsByCategory = (category) =>
    createSelector(
      [selectAllProducts, selectAllProductFilters],
      (products, filters) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );
        if (!filters.selectedColors.length) {
          return categoryProducts;
        } else {
          return categoryProducts.filter((product) =>
            product.colors.some((color) => filters.selectedColors.includes(color))
          );
        }
      }
    );
  
