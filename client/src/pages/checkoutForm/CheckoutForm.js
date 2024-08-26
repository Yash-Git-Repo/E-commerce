import React, { useState } from "react";
import { axiosClientNoAuth } from "../../utils/axiosClient";
import "./CheckoutForm.scss";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";

function CheckoutForm({ cart, totalAmount, onClose }) {
  const dispatch = useDispatch();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      // Create order on server
      const response = await axiosClientNoAuth.post(
        "http://localhost:1337/api/payments/create",
        {
          amount: totalAmount,
          currency: "INR",
          receipt: "receipt#1",
          payment_capture: 1,
        }
      );

      const { orderId, currency, amount } = response.data;

      // Initialize Razorpay
      const options = {
        key: "rzp_test_qpdcp8ukUUg3Mh",
        amount: amount.toString(),
        currency: currency,
        name: customerDetails.name,
        description: "Test Transaction",
        order_id: orderId,
        handler: async (response) => {
          try {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;

            const verifyResponse = await axiosClientNoAuth.post(
              "http://localhost:1337/api/payments/verify",
              {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
              }
            );

            if (verifyResponse.data.success) {
              alert("Payment successful!");
              dispatch(clearCart(cart));
              onClose(); // Close the checkout form
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          email: customerDetails.email,
          contact: customerDetails.contact,
        },
        notes: {
          Name: customerDetails.name,
          Address: customerDetails.address,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <div className="cart-details">
          <h2>Cart Details</h2>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <h4>{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹ {item.price}</p>
            </div>
          ))}
          <div className="total-amount">
            <h3>Total: ₹ {totalAmount}</h3>
          </div>
        </div>
        <div className="form-container">
          <h2>Checkout</h2>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={customerDetails.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customerDetails.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={customerDetails.contact}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={customerDetails.address}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handlePayment}>
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default CheckoutForm;
