import React from "react";
import './CartItem.scss'
import { AiOutlineClose } from "react-icons/ai";
import { addToCart, removeFromCart, removeItemFromCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartITem({cart}) {
  const dispatch = useDispatch()
  
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={cart?.image} alt="IMG" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">{cart?.title}</p>
          <p className="price">₹ {cart?.price}</p>
          <div className="quantity-selector">
                <span
                  className="btn decrement
                "
                  onClick={() => dispatch(removeFromCart(cart))}
                >
                  -
                </span>
                <span className="quantity">{cart?.quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(cart))}
                >
                  +
                </span>
              </div>
          <p className="total-price">Subtotal: ₹ {cart?.quantity * cart?.price}</p>
        </div>

        <div className="item-remove" onClick={() =>{dispatch(removeItemFromCart(cart))}}>
        <AiOutlineClose />
      </div>
      </div>
    </div>
  );
}

export default CartITem;
