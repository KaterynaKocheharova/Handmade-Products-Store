import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

const selectCartProducts = (state) => state.cart.items;

export const selectFinalCartProducts = createSelector(
  [selectAllProducts, selectCartProducts],
  (allProducts, cartProducts) => {
    return allProducts.filter((product) => {
      const cartProductIndex = cartProducts.findIndex(
        (cartProduct) => cartProduct.productId === product.id
      );
      if (cartProductIndex >= 0) {
        return true;
      } else {
        return false;
      }
    });
  }
);

export const selectCartProductsQuantity = createSelector([selectCartProducts], (cartProducts) => cartProducts.length)
