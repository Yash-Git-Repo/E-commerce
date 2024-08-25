
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/orders/customOrder',
        handler: 'order.customOrderController', // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
      },
    ],
  };