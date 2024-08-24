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
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ productId, quantity: 1 });
      }
    },
    reduceQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = Math.max(item.quantity - 1, 1);
      }
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ productId, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, reduceQuantity, increaseQuantity, removeFromCart } =
  cartSlice.actions;
