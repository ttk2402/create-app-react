import { Routes, Route } from 'react-router-dom'
import { SlidebarDefault } from './components/SlidebarDefault'
import Login from './components/Login'
import { ProductManage } from './components/Admin/ProductManage'
import TitlePageAdmin from './components/Admin/TitlePageAdmin'
import AddProduct from './components/Admin/AddProduct'
import Product from './components/Product'
function App() {


  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
      </Routes> */}
      {/* <Navbar />
      <Carousel />
      <Footer /> */}
      {/* <div style={{ display: 'flex' }}>
        <SlidebarDefault />
        <div>
          <TitlePageAdmin />
          <ProductManage />
        </div>

      </div> */}
      <Product
        name="Sandwich gà giòn"
        url="https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg"
        price="48000"
        description="Sandwich, gà chiên, xà lách, cà chua, dưa leo"
      />

    </>
  )
}

export default App
