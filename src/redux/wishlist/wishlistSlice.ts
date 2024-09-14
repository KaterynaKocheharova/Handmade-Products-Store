import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type WishlistState = {
  items: string[];
};

const initialState: WishlistState = {
  items: [],
};

const widhlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item === action.payload);
      if (!item) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item !== action.payload);
      }
    },
  },
});

export default widhlistSlice.reducer;
export const { toggleWishlist } = widhlistSlice.actions;
