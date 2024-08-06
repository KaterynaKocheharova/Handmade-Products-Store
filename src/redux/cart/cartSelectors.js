import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

export const selectCartProducts = (state) => state.cart.items;

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

export const selectQuantity = (productId) => (state) =>
  state.cart.items.find((item) => item.productId === productId).quantity;
