import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import {axiosClient} from "../../utils/axiosClient";
import Categories from "../../components/categories/Categories";

function Home() {
  const [categories, setCategories] = useState(null);
  const [topProducts, setTopProducts] = useState(null);

  async function fetchData() {
    const categoryResponse = await axiosClient.get(
      "/categories?populate=image"
    );
    const topProductsResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    setCategories(categoryResponse.data.data)
    setTopProducts(topProductsResponse.data.data)
  }

  useEffect(() =>{
    fetchData()
  },[])

  return (
    <div>
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="sub-heading">
            Shop from the best, our Film and TV Posters collection.
          </p>
        </div>
        <div className="categories-content">
          {categories?.map((item => <Categories category ={item} key={item.id}/>))}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks !!</h2>
          <p className="sub-heading">
            All new designs, Some old detailed designs.
          </p>
        </div>
        <div className="product-content">
        {topProducts?.map((item => <Product product ={item} key={item.id}/>))}
        </div>
      </section>
    </div>
  );
}

export default Home;
