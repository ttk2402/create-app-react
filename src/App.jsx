import { useEffect, useState } from "react";

import Product from "./components/Product"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <Cart cart={cart} setCart={setCart} />
      <Header cart={cart} />
      <Product cart={cart} setCart={setCart} />
      <Footer />
    </>
  )
}

export default App
