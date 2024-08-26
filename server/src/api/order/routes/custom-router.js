module.exports = {
  routes: [
    {
      method: "GET",
      path: "/orders/customOrder",
      handler: "order.customOrderController", // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
    },
    {
      method: "POST",
      path: "/payments/create",
      handler: "order.createPaymentOrder",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/payments/verify",
      handler: "order.verifyPayment",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
