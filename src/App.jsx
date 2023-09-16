
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [products, setProducts] = useState([])

  const handleAddToCart = product =>{
    const newProducts = [...products, product]
    setProducts(newProducts)
  }

  return (
    <>
        <Header></Header>
        <main className='flex flex-col md:flex-row justify-between gap-6'>
          <Courses handleAddToCart={handleAddToCart}></Courses>
          <Cart products={products}></Cart>
        </main>
    </>
  )
}

export default App
