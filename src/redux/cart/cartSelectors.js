import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";

const selectCartProducts = (state) => state.cart.items;

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
