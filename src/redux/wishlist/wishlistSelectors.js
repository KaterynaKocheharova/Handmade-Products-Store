import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

export const selectWishlistIds = (state) => state.wishlist.items;

export const selectWishlistProducts = createSelector(
  [selectWishlistIds, selectAllProducts],
  (wishlistIds, allProducts) =>
    allProducts.filter((product) => wishlistIds.includes(product.id))
);
