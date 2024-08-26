import React, { useState } from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import CartItem from "../cartItem/CartITem";
import { useSelector } from "react-redux";
import CheckoutForm from "../../pages/checkoutForm/CheckoutForm";

function Cart({ onClose }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.quantity * item.price));

  const isCartEmpty = cart?.length === 0;

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  if (showCheckout) {
    return (
      <CheckoutForm cart={cart} totalAmount={totalAmount} onClose={onClose} />
    );
  }
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
        {cart?.map((item) => (
          <CartItem cart={item} key={item.id} />
        ))}
        {isCartEmpty && (
          <div className="empty-cart-info">
            <div className="icon">
              <BsCartX />
            </div>
            <h4>Cart is Empty</h4>
          </div>
        )}
        {!isCartEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <h3>Total</h3>
              <h3 className="total-value">₹ {totalAmount}</h3>
            </div>
            <div className="checkout btn-primary" onClick={handleCheckoutClick}>
              Checkout Now
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
