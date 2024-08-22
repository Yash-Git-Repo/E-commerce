import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import dummyNarutoImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const productKey = params.productId;

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${productKey}&populate=image`
    );
    console.log("prod", productResponse.data.data[0]);
    setProduct(productResponse.data.data[0]);
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  
  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={product?.attributes?.image?.data?.attributes?.url} alt="IMG" />
          </div>
          <div className="product-info">
            <h1 className="heading">{product?.attributes?.title}</h1>
            <h3 className="price">₹ {product?.attributes?.price}</h3>
            <p className="description">{product?.attributes?.desc}</p>
            <div className="cart-options">
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
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  Items must be returned in their original condition: Unused,
                  undamaged, and in the original packaging. Return shipping:
                  sent.
                </li>
                <li>
                  The buyer is responsible for return shipping costs, except in
                  cases where the item is defective or the wrong item was
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
