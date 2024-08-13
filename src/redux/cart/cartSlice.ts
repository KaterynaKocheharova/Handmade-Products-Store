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
    // THERE MIGHT NOT BE CASES WHERE I WILL PRESS ADD TO CART BUTTON IF THE PRODUCT IS ALREADY ADDED BECAUSE THE BUTTON CHANGES, SO RE
    // CONSIDER CONDITIONAL REDUCER LATER
    addToCart(state, action: PayloadAction<CartItem>) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += 1;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart,removeFromCart } = cartSlice.actions;
