import React from 'react'
import './ProductDetails.scss'
import dummyNarutoImg from '../../assets/naruto.jpeg'

function ProductDetails() {
  return (
    <div className='product-detail'>
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyNarutoImg} alt="IMG" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is title , Wall Art !!</h1>
            <h3 className="price">
              ₹ 549
            </h3>
            <p className="description">Bring the world of Naruto to life with this stunning, high-quality wall art print. Perfect for anime lovers, this poster features a vibrant, detailed image of Naruto Uzumaki, showcasing his signature ninja pose and determined expression. Whether you're decorating your home, office, or dorm room, this eye-catching piece is sure to inspire and motivate.</p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className='btn decrement
                '>-</span>
                <span className='quantity'>3</span>
                <span className='btn increment'>+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>Items must be returned in their original condition: Unused, undamaged, and in the original packaging.
                  Return shipping:  sent.</li>
                <li>The buyer is responsible for return shipping costs, except in cases where the item is defective or the wrong item was</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails