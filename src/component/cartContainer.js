import React from "react";

import { CartItems } from "./cartItems";
import { useDispatch, useSelector } from "react-redux";

//model actions
import { openModel } from "../freatures/modal/modalSlice";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  if (totalItems < 1) {
    return (
      <section className="cart">
        <header>
          <h1>Your Bag</h1>
          <h4 className="empty">is Currently empty</h4>
        </header>
      </section>
    );
  }

  //just open modal cart
  const showModal = () => {
    dispatch(openModel());
  };

  //
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems item={item} key={item.id} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            cart Total Amount: <span>Rs. {totalAmount}</span>
          </h4>
        </div>

        <button className="btn clear-btn" onClick={showModal}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};
