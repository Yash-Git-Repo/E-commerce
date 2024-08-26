import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetail/ProductDetails'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Footer from './components/footer/Footer'
import Naavbar from './components/navbar/Navbar'
import Category from './pages/category/Category'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {fetchCategories} from './redux/slices/categorySlice'
import Items from './components/items/Items'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(fetchCategories())
  },[dispatch])

  return <div className='App'>
    <Naavbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/category/:categoryId?' element={<Category />}></Route>
      <Route path='/products/:productId' element={<ProductDetail />}></Route>
      <Route path='/products' element={<Items />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
  </div>

}

export default App