import { createSlice } from "@reduxjs/toolkit";
import products from "./items";

const productsInitialState = {
  items: products,
  wishlist: [], 
  cartlist: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    deleteProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.wishlist = state.wishlist.filter((id) => id !== action.payload);
      state.cartlist = state.cartlist.filter((id) => id !== action.payload);
    },
    addToWishList(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (wishlistId) => wishlistId !== action.payload
      );
    },
    addToCartlist(state, action) {
      state.cartlist.push(action.payload);
    },
    removeFromCartlist(state, action) {
      state.cartlist = state.cartlist.filter(
        (cartlistid) => cartlistid !== action.payload
      );
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const {
  addToWishList,
  removeFromWishlist,
  addToCartlist,
  removeFromCartlist,
  deleteProduct,
} = productsSlice.actions;
