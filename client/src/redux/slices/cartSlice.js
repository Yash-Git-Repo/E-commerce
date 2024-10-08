import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const curItem = product
        ? {
            title: product.title,
            key: product.key,
            price: product.price,
            image: product.image.data.attributes.url,
          }
        : action.payload;

      const index = state.cart.findIndex((item) => item.key === curItem.key);
      if (index === -1) {
        state.cart.push({ ...curItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const curItem = action.payload.attributes || action.payload;
      const index = state.cart.findIndex((item) => item.key === curItem.key);
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== curItem.key);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const curItem = action.payload.attributes || action.payload;
      state.cart = state.cart.filter((item) => item.key !== curItem.key);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeItemFromCart,clearCart } = cartSlice.actions;
