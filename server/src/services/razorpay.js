// src/services/razorpay.js

const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Add your Razorpay Key ID here
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Add your Razorpay Key Secret here
});

module.exports = {
  razorpayInstance,
};
