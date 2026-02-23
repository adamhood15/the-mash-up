import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import SignUp from '../pages/Signup'
import Account from '../pages/Account'
import Checkout from '../pages/Checkout'
import ProductForm from '../pages/ProductForm'
import ProductSubmission from '../pages/ProductSubmission'
import UserProducts from '../pages/UserProducts'
import SingleProduct from '../pages/SingleProduct'
import ProductSearch from '../pages/ProductSearch'

import Cart from '../components/ui/Cart'
import PurchaseHistory from '../components/ui/PurchaseHistory'
import SaleHistory from '../components/ui/ProductOrders'
import MarketPlace from '../pages/MarketPlace'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/products' element={<MarketPlace />} />
      <Route path='/productsubmission' element={<ProductSubmission />} />
      <Route path='/addProduct' element={<ProductForm />} />
      <Route path='/products/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/account' element={<Account />} />
      <Route path='/account/purchase-history' element={<PurchaseHistory />} />
      <Route path='/account/sale-history' element={<SaleHistory />} />
      <Route path='/user' element={<UserProducts />} />
      <Route path='/product/:productId' element={<SingleProduct />} />
      <Route path='/productsearch/:searchKeyword' element={<ProductSearch />} />
    </Routes>
  )
}
