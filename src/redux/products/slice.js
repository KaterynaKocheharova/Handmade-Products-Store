import p1_img from "../../assets/My_Assets/product_1.jpg";
import p2_img from "../../assets/My_Assets/product_2.jpg";
import p3_img from "../../assets/My_Assets/product_3.jpg";
import p4_img from "../../assets/My_Assets/product_4.jpg";
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
import p16_img from "../../assets/My_Assets/product_16.jpg";
import p17_img from "../../assets/My_Assets/product_17.jpg";
import p18_img from "../../assets/My_Assets/product_18.jpg";
import p19_img from "../../assets/My_Assets/product_19.jpg";
import p20_img from "../../assets/My_Assets/product_20.jpg";
import p21_img from "../../assets/My_Assets/product_21.jpg";
import p22_img from "../../assets/My_Assets/product_22.jpg";
import p23_img from "../../assets/My_Assets/product_23.jpg";
import p24_img from "../../assets/My_Assets/product_24.jpg";

import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  items: [
    {
      id: 1,
      name: "Гаманець 1",
      category: "wallet",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 2,
      name: "Сумка 1",
      category: "bag",
      image: p2_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 3,
      name: "Сумка 2",
      category: "bag",
      image: p3_img,
      new_price: 60.0,
      old_price: 100.5,
    },
    {
      id: 4,
      name: "Сумка 3",
      category: "bag",
      image: p4_img,
      new_price: 100.0,
      old_price: 150.0,
    },
    {
      id: 5,
      name: "Жінки 1",
      category: "women",
      image: p5_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 6,
      name: "Гаманець 2",
      category: "wallet",
      image: p6_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 7,
      name: "Сумка 4",
      category: "bag",
      image: p7_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 8,
      name: "Гаманець 3",
      category: "wallet",
      image: p8_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 9,
      name: "Ремінь 1",
      category: "belt",
      image: p9_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 10,
      name: "Гаманець 4",
      category: "wallet",
      image: p10_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 11,
      name: "Гаманець 5",
      category: "wallet",
      image: p11_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 12,
      name: "Гаманець 6",
      category: "wallet",
      image: p12_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 13,
      name: "Рюкзак 1",
      category: "bagpack",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 14,
      name: "Гаманець 7",
      category: "wallet",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 15,
      name: "Чоловіки 1",
      category: "men",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 16,
      name: "Сумка 5",
      category: "bag",
      image: p16_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 17,
      name: "Гаманець 8",
      category: "wallet",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 18,
      name: "Сумка 6",
      category: "bag",
      image: p18_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 19,
      name: "Сумка 7",
      category: "bag",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 20,
      name: "Ремінь 2",
      category: "belt",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 21,
      name: "Гаманець 9",
      category: "wallet",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 22,
      name: "Сумка 8",
      category: "bag",
      image: p22_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 23,
      name: "Сумка 9",
      category: "bag",
      image: p23_img,
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 24,
      name: "Сумка 10",
      category: "bag",
      image: p24_img,
      new_price: 85.0,
      old_price: 120.5,
    },
  ],
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
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const productsReducer = productsSlice.reducer;
