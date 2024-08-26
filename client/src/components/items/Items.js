import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { axiosClient } from "../../utils/axiosClient";
import "./Items.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

function Items() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch()

  async function fetchItems() {
    const itemsResponse = await axiosClient.get(`products?populate=image`);
    setItems(itemsResponse?.data?.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="item-container">
      <div className="items-box">
        {items?.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
      <div className="quantity-selector">
        <span
          className="btn decrement
                "
          onClick={() => dispatch(removeFromCart(items))}
        >
          -
        </span>
        <span className="quantity">{items?.quantity}</span>
        <span
          className="btn increment"
          onClick={() => dispatch(addToCart(items))}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default Items;
