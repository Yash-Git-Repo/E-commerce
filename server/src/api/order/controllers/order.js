"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

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

  async create(ctx) {
    try {
      console.log(ctx);

      // @ts-ignore
      const { products } = ctx.request.body;
      const entry = await strapi.entityService.create("api::order.order", {
        data: {
          products, // Example of using the body data
          stripeid: "dummy",
        },
      });
      return { data: entry };
    } catch (error) {
      console.log(error);
      ctx.response.status = 500;
      return error;
    }
  },
}));
