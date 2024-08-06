import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
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
    editQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (index >= 0) {
        state.items[index].quantity = quantity;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, editQuantity } = cartSlice.actions;
