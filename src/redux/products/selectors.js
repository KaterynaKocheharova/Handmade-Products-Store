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

export const selectWallets = (state) => state.products.items.filter(item => item.category === "wallets");
export const selectBags = (state) => state.products.items.filter(item => item.category === "bags");
export const selectBelts = (state) => state.products.items.filter(item => item.category === "belts");
export const selectBackpacks = (state) => state.products.items.filter(item => item.category === "backpacks");
