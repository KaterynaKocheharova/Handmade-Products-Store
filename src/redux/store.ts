import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { productsReducer } from "./products/slice";
import { filtersReducer } from "./filters/filtersSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
import diaogueReducer from "./dialogue/slice";
import snackbarReducer from "./snackbar/slice";
import cartReducer from "./cart/cartSlice";
import sidebarReducer from "./sidebar/sidebarSlice";

const authPersistConfiguration = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const productsPersistConfiguration = {
  key: "items",
  storage,
  whitelist: ["wishlist", "cartlist"],
};

const cartPersistConfiguration = {
  key: "cart",
  storage,
};

const wishlistPersistConfiguration = {
  key: "wishlist",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfiguration, authReducer),
    products: persistReducer(productsPersistConfiguration, productsReducer),
    cart: persistReducer(cartPersistConfiguration, cartReducer),
    wishlist: persistReducer(wishlistPersistConfiguration, wishlistReducer),
    filters: filtersReducer,
    dialogue: diaogueReducer,
    snackbar: snackbarReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
