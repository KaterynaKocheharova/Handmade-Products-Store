import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

export const selectCartProducts = (state) => state.cart.items;

export const selectCartProductsIds = createSelector(
  [selectCartProducts],
  (cartProducts) => {
    return cartProducts.map((cartProduct) => cartProduct.productId);
  }
);

export const selectFinalCartProducts = createSelector(
  [selectAllProducts, selectCartProducts],
  (allProducts, cartProducts) => {
    const cartProductIds = cartProducts.map(
      (cartProduct) => cartProduct.productId
    );
    return allProducts.filter((product) => cartProductIds.includes(product.id));
  }
);

export const selectCartProductsQuantity = createSelector(
  [selectCartProducts],
  (cartProducts) =>
    cartProducts.reduce((total, product) => total + product.quantity, 0)
);

