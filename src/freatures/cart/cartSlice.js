import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  totalAmount: 0, //totalAmount cartItemas for each price addition
  totalItems: cartItems.length,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  //
  reducers: {
    clearItems: (state) => {
      // console.log("clearItems:", state.cartItems);
      // state.cartItems = [];

      return {
        ...state,
        cartItems: [],
        totalItems: 0,
        // totalItems: cartItems.length,/
      };
    },

    removeItems: (state, actions) => {
      let cartItems = state.cartItems.filter(
        (item) => item.id !== actions.payload
      );

      return {
        ...state,
        cartItems,
        totalItems: cartItems.length,
        // totalItems: state.totalItems - 1,
      };
    },

    increaseItemQty: (state, { payload }) => {
      const item = state.cartItems.find((itm) => itm.id === payload);
      item.qty += 1;

      item.totalPrice = item.price * item.qty;

      console.log(state.amount);
    },

    decreaseItemQty: (state, { payload }) => {
      const item = state.cartItems.find((itm) => itm.id === payload);
      item.qty -= 1;

      if (item.qty <= 0) {
        state.cartItems = state.cartItems.filter((itm) => itm.id !== item.id);
      }
    },

    calculateTotal: (state) => {
      let totalAmount = 0;

      state.cartItems.forEach((itm) => {
        itm.totalPrice = itm.price * itm.qty;
        // totalAmount += itm.price * itm.qty;
        totalAmount += itm.totalPrice;
      });

      state.totalAmount = totalAmount;
    },
  },
});

console.log(cartSlice);

export const {
  clearItems,
  removeItems,
  increaseItemQty,
  decreaseItemQty,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
