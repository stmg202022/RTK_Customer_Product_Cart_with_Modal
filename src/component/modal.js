import React from "react";

import { useDispatch } from "react-redux";

import { clearItems } from "../freatures/cart/cartSlice";
import { closeModel } from "../freatures/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  //clearItems and close modal
  const confirmModel = () => {
    dispatch(clearItems());
    dispatch(closeModel());
  };

  //just close model
  const cancelModal = () => {
    dispatch(closeModel());
  };

  //
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>

        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={confirmModel}
          >
            Confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={cancelModal}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
