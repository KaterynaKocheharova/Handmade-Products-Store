import p1_img from "../../assets/My_Assets/product_1.jpg";
import p2_img from "../../assets/My_Assets/product_2.jpg";
import p5_img from "../../assets/My_Assets/product_5.jpg";
import p6_img from "../../assets/My_Assets/product_6.jpg";
import p7_img from "../../assets/My_Assets/product_7.jpg";
import p8_img from "../../assets/My_Assets/product_8.jpg";
import p9_img from "../../assets/My_Assets/product_9.jpg";
import p10_img from "../../assets/My_Assets/product_10.jpg";
import p11_img from "../../assets/My_Assets/product_11.jpg";
import p12_img from "../../assets/My_Assets/product_12.jpg";
import p13_img from "../../assets/My_Assets/product_13.jpg";
import p14_img from "../../assets/My_Assets/product_14.jpg";
import p15_img from "../../assets/My_Assets/product_15.jpg";
import p17_img from "../../assets/My_Assets/product_17.jpg";
import p18_img from "../../assets/My_Assets/product_18.jpg";
import p19_img from "../../assets/My_Assets/product_19.jpg";
import p20_img from "../../assets/My_Assets/product_20.jpg";
import p21_img from "../../assets/My_Assets/product_21.jpg";

import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  items: [
    {
      id: "1",
      name: "Гаманець 1",
      category: "wallets",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
      description: "Stylish wallet for everyday use.",
    },
    {
      id: "2",
      name: "Сумка 1",
      category: "bags",
      image: p2_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Durable and fashionable bag.",
    },
    {
      id: "5",
      name: "Гаманець",
      category: "wallets",
      image: p5_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant wallet",
    },
    {
      id: "6",
      name: "Сумка",
      category: "wallet",
      image: p6_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Premium bag with additional compartments.",
    },
    {
      id: "7",
      name: "Гаманець 4",
      category: "wallets",
      image: p7_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Fashionable wallet with ample space.",
    },
    {
      id: "8",
      name: "Ремінь",
      category: "belts",
      image: p8_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic wallet with elegant design.",
    },
    {
      id: "9",
      name: "Гаманець 1",
      category: "wallets",
      image: p9_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Stylish belt for any occasion.",
    },
    {
      id: "10",
      name: "Гаманець 4",
      category: "wallet",
      image: p10_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Wallet with modern design.",
    },
    {
      id: "11",
      name: "Гаманець 5",
      category: "wallet",
      image: p11_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Compact wallet with minimalist look.",
    },
    {
      id: "12",
      name: "Гаманець 6",
      category: "wallet",
      image: p12_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Spacious wallet with multiple slots.",
    },
    {
      id: "13",
      name: "Рюкзак 1",
      category: "backpacks",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Functional backpack with ergonomic straps.",
    },
    {
      id: "14",
      name: "Гаманець 7",
      category: "wallet",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Luxurious wallet made from high-quality material.",
    },
    {
      id: "15",
      name: "Чоловічий одяг 1",
      category: "men's clothing",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Trendy men's clothing with a modern style.",
    },
    {
      id: "17",
      name: "Гаманець 8",
      category: "wallet",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant wallet with a sophisticated look.",
    },
    {
      id: "18",
      name: "Сумка 6",
      category: "bags",
      image: p18_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Chic bag with adjustable straps.",
    },
    {
      id: "19",
      name: "Сумка 7",
      category: "bags",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Versatile bag suitable for various occasions.",
    },
    {
      id: "20",
      name: "Ремінь 2",
      category: "belts",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic belt with adjustable buckle.",
    },
    {
      id: "21",
      name: "Гаманець 9",
      category: "wallet",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Stylish wallet with elegant coating.",
    },
  ],

  wishlist: [], // ids
  cartlist: [], // ids
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
