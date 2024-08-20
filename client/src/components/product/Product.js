import React from 'react'
import './Product.scss'
import dummyNarutoImg from '../../assets/naruto.jpeg'
function Product() {
  return (
    <div className='product'>
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyNarutoImg} alt="IMG" id='img'/>
          </div>
        </div>
        <div className="product-info">
          <p className="title">
            Delux Wall Hanger 23", 23x23 Solid Color
          </p>
          <p className="price">₹ 549</p>
        </div>
      </div>
    </div>
  )
}

export default Product