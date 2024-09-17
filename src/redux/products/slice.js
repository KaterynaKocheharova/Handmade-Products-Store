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
      colors: ["black", "brown", "blue"],
    },
    {
      id: "2",
      name: "Сумка 1",
      category: "bags",
      image: p2_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Durable and fashionable bag.",
      colors: ["red", "black", "green"],
    },
    {
      id: "5",
      name: "Гаманець",
      category: "wallets",
      image: p5_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant wallet",
      colors: ["brown", "tan", "blue"],
    },
    {
      id: "6",
      name: "Сумка",
      category: "wallet",
      image: p6_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Premium bag with additional compartments.",
      colors: ["gray", "black", "white"],
    },
    {
      id: "7",
      name: "Гаманець 4",
      category: "wallets",
      image: p7_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Fashionable wallet with ample space.",
      colors: ["black", "red", "brown"],
    },
    {
      id: "8",
      name: "Ремінь",
      category: "belts",
      image: p8_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic wallet with elegant design.",
      colors: ["black", "brown", "gray"],
    },
    {
      id: "9",
      name: "Гаманець 1",
      category: "wallets",
      image: p9_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Stylish belt for any occasion.",
      colors: ["black", "blue", "tan"],
    },
    {
      id: "10",
      name: "Гаманець 4",
      category: "wallet",
      image: p10_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Wallet with modern design.",
      colors: ["brown", "green", "gray"],
    },
    {
      id: "11",
      name: "Гаманець 5",
      category: "wallet",
      image: p11_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Compact wallet with minimalist look.",
      colors: ["black", "tan", "gray"],
    },
    {
      id: "12",
      name: "Гаманець 6",
      category: "wallet",
      image: p12_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Spacious wallet with multiple slots.",
      colors: ["brown", "blue", "black"],
    },
    {
      id: "13",
      name: "Рюкзак 1",
      category: "backpacks",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Functional backpack with ergonomic straps.",
      colors: ["black", "green", "blue"],
    },
    {
      id: "14",
      name: "Гаманець 7",
      category: "wallet",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Luxurious wallet made from high-quality material.",
      colors: ["black", "red", "brown"],
    },
    {
      id: "15",
      name: "Чоловічий одяг 1",
      category: "men's clothing",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Trendy men's clothing with a modern style.",
      colors: ["blue", "gray", "white"],
    },
    {
      id: "17",
      name: "Гаманець 8",
      category: "wallet",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant wallet with a sophisticated look.",
      colors: ["brown", "black", "green"],
    },
    {
      id: "18",
      name: "Сумка 6",
      category: "bags",
      image: p18_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Chic bag with adjustable straps.",
      colors: ["black", "red", "blue"],
    },
    {
      id: "19",
      name: "Сумка 7",
      category: "bags",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Versatile bag suitable for various occasions.",
      colors: ["green", "black", "gray"],
    },
    {
      id: "20",
      name: "Ремінь 2",
      category: "belts",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic belt with adjustable buckle.",
      colors: ["black", "brown", "tan"],
    },
    {
      id: "21",
      name: "Гаманець 9",
      category: "wallet",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Stylish wallet with elegant coating.",
      colors: ["black", "brown", "blue"],
    },
    {
      id: "22",
      name: "Сумка 8",
      category: "bags",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant bag with versatile design.",
      colors: ["black", "blue", "tan"],
    },
    {
      id: "23",
      name: "Ремінь 3",
      category: "belts",
      image: p8_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Premium belt with smooth finish.",
      colors: ["black", "gray", "green"],
    },
    {
      id: "24",
      name: "Гаманець 10",
      category: "wallets",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
      description: "Compact and durable wallet.",
      colors: ["brown", "tan", "gray"],
    },
    {
      id: "25",
      name: "Чоловічий одяг 2",
      category: "men's clothing",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic men's clothing with a refined look.",
      colors: ["white", "green", "gray"],
    },
    {
      id: "26",
      name: "Рюкзак 2",
      category: "backpacks",
      image: p13_img,
      new_price: 90.0,
      old_price: 130.0,
      description: "Stylish backpack for everyday use.",
      colors: ["red", "gray", "blue"],
    },
    {
      id: "27",
      name: "Гаманець 11",
      category: "wallet",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Stylish wallet with a modern look.",
      colors: ["brown", "black", "tan"],
    },
    {
      id: "28",
      name: "Сумка 9",
      category: "bags",
      image: p2_img,
      new_price: 100.0,
      old_price: 150.0,
      description: "Fashionable bag with multiple compartments.",
      colors: ["gray", "black", "brown"],
    },
    {
      id: "29",
      name: "Ремінь 4",
      category: "belts",
      image: p20_img,
      new_price: 70.0,
      old_price: 100.0,
      description: "Elegant belt for formal occasions.",
      colors: ["brown", "black", "gray"],
    },
    {
      id: "30",
      name: "Гаманець 12",
      category: "wallets",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Luxurious wallet for special occasions.",
      colors: ["blue", "black", "tan"],
    },
    {
      id: "31",
      name: "Гаманець 13",
      category: "wallet",
      image: p7_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Spacious wallet with a classic look.",
      colors: ["black", "red", "blue"],
    },
    {
      id: "32",
      name: "Рюкзак 3",
      category: "backpacks",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Compact backpack with a modern design.",
      colors: ["green", "brown", "black"],
    },
    {
      id: "33",
      name: "Сумка 10",
      category: "bags",
      image: p18_img,
      new_price: 90.0,
      old_price: 130.0,
      description: "Stylish bag for casual outings.",
      colors: ["blue", "gray", "black"],
    },
    {
      id: "34",
      name: "Гаманець 14",
      category: "wallet",
      image: p5_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Elegant wallet for formal occasions.",
      colors: ["brown", "gray", "green"],
    },
    {
      id: "35",
      name: "Ремінь 5",
      category: "belts",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Classic belt with a sleek design.",
      colors: ["black", "green", "brown"],
    },
    {
      id: "36",
      name: "Сумка 11",
      category: "bags",
      image: p19_img,
      new_price: 95.0,
      old_price: 135.0,
      description: "Elegant bag for versatile use.",
      colors: ["brown", "black", "red"],
    },
    {
      id: "37",
      name: "Гаманець 15",
      category: "wallet",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Compact wallet with a sleek design.",
      colors: ["black", "tan", "gray"],
    },
    {
      id: "38",
      name: "Гаманець 16",
      category: "wallet",
      image: p12_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Premium wallet with multiple compartments.",
      colors: ["blue", "gray", "black"],
    },
    {
      id: "39",
      name: "Рюкзак 4",
      category: "backpacks",
      image: p13_img,
      new_price: 90.0,
      old_price: 130.0,
      description: "Durable backpack for everyday use.",
      colors: ["red", "black", "brown"],
    },
    {
      id: "40",
      name: "Гаманець 17",
      category: "wallet",
      image: p10_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Modern wallet with stylish design.",
      colors: ["green", "blue", "brown"],
    },
    {
      id: "41",
      name: "Сумка 12",
      category: "bags",
      image: p18_img,
      new_price: 95.0,
      old_price: 135.0,
      description: "Fashionable bag with elegant details.",
      colors: ["black", "red", "tan"],
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
