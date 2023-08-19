import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./freatures/cart/cartSlice";
import modalReducer from "./freatures/modal/modalSlice";

import "./freatures/cart/cartSlice";
import "./freatures/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    model: modalReducer,
  },
});
