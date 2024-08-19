import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartItems = CartItem[];

export type CartState = {
  items: CartItems;
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += 1;
      } else {
        state.items.push({ productId, quantity: 1 });
      }
    },
    reduceQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        const newQuantity = --state.items[indexProductId].quantity;
        if (newQuantity === 0) {
          state.items.splice(indexProductId, 1);
        }
      }
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += 1;
      } else {
        state.items.push({ productId, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items.splice(indexProductId, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, reduceQuantity, increaseQuantity, removeFromCart } =
  cartSlice.actions;
