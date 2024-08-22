import { Routes, Route } from 'react-router-dom'
import Categories from './components/categories/Categories'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import ProductDetail from './pages/productDetail/ProductDetails'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Footer from './components/footer/Footer'
import Naavbar from './components/navbar/Navbar'
import Category from './pages/category/Category'

function App() {
  return <div className='App'>
    <Naavbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/categories/:categoryId' element={<Category />}></Route>
      <Route path='/products/:productId' element={<ProductDetail />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
  </div>

}

export default App