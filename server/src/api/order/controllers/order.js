"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { razorpayInstance } = require("../../../services/razorpay");
const crypto = require("crypto");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async customOrderController(ctx) {
    try {
      const entries = await strapi.entityService.findMany(
        "api::product.product",
        {
          fields: ["title", "desc"],
          limit: 3,
        }
      );

      return { data: entries };
    } catch (error) {
      ctx.body = error;
    }
  },

  async createPaymentOrder(ctx) {
    try {
      //@ts-ignore
      const { amount, currency = "INR", receipt } = ctx.request.body;

      const options = {
        amount: amount * 100, // Amount in smallest unit
        currency,
        receipt,
        payment_capture: "1", // Automatically capture payment
      };

      const order = await razorpayInstance.orders.create(options);

      ctx.send({
        orderId: order.id,
        currency: order.currency,
        amount: order.amount,
        receipt: order.receipt,
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async verifyPayment(ctx) {
    try {
      //@ts-ignore
      const {orderId, paymentId,signature } = ctx.request.body;

      //@ts-ignore
      const shasum = crypto.createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      );

      shasum.update(`${orderId}|${paymentId}`);
      const digest = shasum.digest("hex");

      if (digest !== signature) {
        ctx.throw(400, "Invalid signature");
      }

      // Payment verified, you can now handle successful payment logic here

      ctx.send({ success: true });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));
