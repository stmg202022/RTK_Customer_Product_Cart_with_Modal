import "./App.css";

import Navbar from "./component/navbar";
import { CartContainer } from "./component/cartContainer";
import Modal from "./component/modal";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { calculateTotal } from "./freatures/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);

  //

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
