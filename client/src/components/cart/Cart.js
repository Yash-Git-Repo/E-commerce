import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../cartItem/CartITem";

function Cart({ onClose }) {
  return (
    <div className="cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose />
            Close
          </div>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="checkout-info">
          <div className="total-amount">
            <h3>Total</h3>
            <h3 className="total-value">₹ 5459</h3>
          </div>
          <div className="checkout btn-primary">Checkout Now</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
