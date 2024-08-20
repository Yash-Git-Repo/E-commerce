import React from 'react'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import Categories from '../categories/Categories'
import Product from '../../components/product/Product'

function Home() {
  return (
    <div>
      <Hero />
      <section className='collection container'>
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="sub-heading">
            Shop from the best, our Film and TV Posters collection.
          </p>
        </div>
        <div className="categories-content">
          <Categories />
          <Categories />
          <Categories />
        </div>
      </section>
      <section className='collection container'>
        <div className="info">
          <h2 className="heading">Our Top Picks !!</h2>
          <p className="sub-heading">
            All new designs, Some old detailed designs.
          </p>
        </div>
        <div className="product-content">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  )
}

export default Home