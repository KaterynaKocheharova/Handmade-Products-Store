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
      category: "гаманець",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
      description: "Стильний гаманець для повсякденного використання.",
    },
    {
      id: "2",
      name: "Сумка 1",
      category: "сумки",
      image: p2_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Міцна і модна сумка.",
    },
    {
      id: "5",
      name: "Жіночий одяг 1",
      category: "жіночий одяг",
      image: p5_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Елегантний жіночий одяг.",
    },
    {
      id: "6",
      name: "Гаманець 2",
      category: "гаманець",
      image: p6_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Преміум гаманець з додатковими відділеннями.",
    },
    {
      id: "7",
      name: "Сумка 4",
      category: "сумки",
      image: p7_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Модна сумка з достатньо місця.",
    },
    {
      id: "8",
      name: "Гаманець 3",
      category: "гаманець",
      image: p8_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Класичний гаманець з елегантним дизайном.",
    },
    {
      id: "9",
      name: "Ремінь 1",
      category: "ремені",
      image: p9_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Стильний ремінь для будь-якої нагоди.",
    },
    {
      id: "10",
      name: "Гаманець 4",
      category: "гаманець",
      image: p10_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Гаманець з сучасним дизайном.",
    },
    {
      id: "11",
      name: "Гаманець 5",
      category: "гаманець",
      image: p11_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Компактний гаманець з мінімалістичним виглядом.",
    },
    {
      id: "12",
      name: "Гаманець 6",
      category: "гаманець",
      image: p12_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Просторий гаманець з кількома слотами.",
    },
    {
      id: "13",
      name: "Рюкзак 1",
      category: "рюкзаки",
      image: p13_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Функціональний рюкзак з ергономічними лямками.",
    },
    {
      id: "14",
      name: "Гаманець 7",
      category: "гаманець",
      image: p14_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Розкішний гаманець з високоякісного матеріалу.",
    },
    {
      id: "15",
      name: "Чоловічий одяг 1",
      category: "чоловічий одяг",
      image: p15_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Модний чоловічий одяг з сучасним стилем.",
    },
    {
      id: "17",
      name: "Гаманець 8",
      category: "гаманець",
      image: p17_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Елегантний гаманець з вишуканим виглядом.",
    },
    {
      id: "18",
      name: "Сумка 6",
      category: "сумки",
      image: p18_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Шикарна сумка з регульованими лямками.",
    },
    {
      id: "19",
      name: "Сумка 7",
      category: "сумки",
      image: p19_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Універсальна сумка, підходяща для різних випадків.",
    },
    {
      id: "20",
      name: "Ремінь 2",
      category: "ремені",
      image: p20_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Класичний ремінь з регульованою пряжкою.",
    },
    {
      id: "21",
      name: "Гаманець 9",
      category: "гаманець",
      image: p21_img,
      new_price: 85.0,
      old_price: 120.5,
      description: "Стильний гаманець з елегантним покриттям.",
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
