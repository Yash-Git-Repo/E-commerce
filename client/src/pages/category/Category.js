import React, { useEffect, useState } from "react";
import "./Category.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Category(category) {
  const navigate = useNavigate();
  const params = useParams();

  const [categoryId, setCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.categoryReducer.categories);

  const sortOptions = [
    {
      value: "Price - Low to High",
      sort: "price",
    },
    {
      value: "Newest First",
      sort: "createdAt",
    },
  ];
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  
  async function fetchProducts() {
    const url = params.categoryId
      ? `products?populate=image&filters[category][key][$eq]=${params.categoryId}`
      : `products?populate=image`;

    const productsResponse = await axiosClient.get(url);

    const filteredProducts = productsResponse?.data?.data;
    setProducts(filteredProducts);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchProducts();
  }, [params, sortBy]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }

  function handleSortChange(e) {
    const sortKey = e.target.value;
    setSortBy(sortKey);
  }

  return (
    <div className="category">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              enim.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              asperiores iure et cumque dolores libero nulla labore, quasi sint.
              Laudantium voluptates animi nemo natus illum!
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onChange={handleSortChange}
              >
                {sortOptions.map((item) => (
                  <option key={item?.id} value={item?.sort}>
                    {item?.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => {
                return (
                  <div key={item?.id} className="filter-radio">
                    <input
                      name="category"
                      type="radio"
                      value={item?.attributes?.key}
                      id={item.id}
                      onChange={updateCategory}
                      checked={item?.attributes?.key === categoryId}
                    />
                    <label htmlFor={item?.id}>{item?.attributes?.title}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="products-box">
            {products?.map((item) => (
              <Product product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
