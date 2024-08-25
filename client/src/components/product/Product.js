import React from 'react'
import './Product.scss'
import { useNavigate } from 'react-router-dom'


function Product(product) {
  const navigate = useNavigate()
  
  return (
    <div className='product' onClick={() =>navigate(`/products/${product.product.attributes.key}`)
    }>
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={product?.product?.attributes?.image?.data?.attributes?.url} alt="IMG" id='img'/>
          </div>
        </div>
        <div className="product-info">
          <p className="title">
            {product?.product?.attributes?.title}
          </p>
          <p className="price">₹ {product?.product?.attributes?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product