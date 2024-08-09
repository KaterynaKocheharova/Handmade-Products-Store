import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

export const selectCartProducts = (state) => state.cart.items;

export const selectCartProductsIds = createSelector(
  [selectCartProducts],
  (cartProducts) => {
    return cartProducts.map((cartProduct) => cartProduct.productId);
  }
);

export const selectQuantity = (productId) =>
  createSelector([selectCartProducts], (cartProducts) => {
    const product = cartProducts.find((item) => item.productId === productId);
    return product ? product.quantity : 0;
  });

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
  (cartProducts) => cartProducts.length
);
