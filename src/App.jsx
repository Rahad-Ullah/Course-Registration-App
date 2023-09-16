
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [products, setProducts] = useState([])
  const [credits, setCredits] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleAddToCart = (product, credit, price) =>{
    const newCredits = credits + credit;
    
    const newProducts = [...products, product]
    setProducts(newProducts)
    setCredits(newCredits)
    setTotalPrice(totalPrice + price)
  }

  return (
    <>
        <Header></Header>
        <main className='flex flex-col md:flex-row justify-between gap-6'>
          <Courses handleAddToCart={handleAddToCart}></Courses>
          <Cart 
            products={products} 
            credits={credits}
            totalPrice={totalPrice}
          ></Cart>
        </main>
    </>
  )
}

export default App
