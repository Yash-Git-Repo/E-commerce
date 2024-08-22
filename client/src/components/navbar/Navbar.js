import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import Cart from '../../components/cart/Cart'
import './Navbar.scss'

function Navbar() {
  const [openCart , setOpenCart] = useState()
  return (
    <>
    <nav className="Navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <ul className='link-group'>
            <li className='hover-link'>
              <Link className='link' to='/products?category=comic' >Comic</Link>
            </li>
            <li className='hover-link'>
              <Link className='link' to='/products?category=comic' >Gaming</Link>
            </li>
            <li className='hover-link'>
              <Link className='link' to='/products?category=comic' >Sports</Link>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <Link to='/' ><h1 className='banner'>POSTERZ.</h1></Link>
        </div>
        <div className="nav-right">
          <div className="nav-cart hover-link" onClick={() => setOpenCart(!openCart)}>
            <BsCart2 className='icon' />
            <span className='cart-count center'>99</span>
          </div>
        </div>
      </div>
    </nav>
    {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  )
}

export default Navbar