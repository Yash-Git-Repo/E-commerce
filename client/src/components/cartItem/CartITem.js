import React from "react";
import './CartItem.scss'
import dummnyNarutoImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";

function CartITem() {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={dummnyNarutoImg} alt="IMG" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">Product Title here</p>
          <p className="price">₹ 5459</p>
          <div className="quantity-selector">
            <span
              className="btn decrement
                "
            >
              -
            </span>
            <span className="quantity">3</span>
            <span className="btn increment">+</span>
          </div>
          <p className="total-price">Subtotal: ₹ 5459</p>
        </div>

        <div className="item-remove">
        <AiOutlineClose />
      </div>
      </div>
    </div>
  );
}

export default CartITem;
