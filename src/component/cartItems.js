import React from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
//

import {
  removeItems,
  increaseItemQty,
  decreaseItemQty,
} from "../freatures/cart/cartSlice";

//
export const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, img, qty, totalPrice } = item;

  const removeCartItems = () => {
    dispatch(removeItems(id));
  };

  const increaseQty = () => {
    dispatch(increaseItemQty(id));
  };

  const decreaseQty = () => {
    dispatch(decreaseItemQty(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">Rs.{price}</h4>

        <button className="remove-btn" onClick={() => removeCartItems(id)}>
          remove
        </button>
      </div>

      <div>
        {/* increment button */}
        <button className="amount-btn" onClick={increaseQty}>
          <KeyboardArrowUpIcon />
        </button>

        <p className="amount"> {qty}</p>

        {/* decrement button */}
        <button
          className="amount-btn"
          onClick={decreaseQty}
          // disabled={item.qty === 1 ? true : false}
        >
          <KeyboardArrowDownIcon />
        </button>
      </div>

      <div
        style={{
          background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`Price: ${item.qty} * ${item.price} = Rs. ${totalPrice}`}
      </div>
    </article>
  );
};
