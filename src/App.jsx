
import { useState } from 'react'
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if(products.includes(product)){
      toast.warning("You have already added this course !!");
      return
    }
    if (newCredits > 20){
      toast.warning('Sorry 😥 You have not enough available credit to parchase !!')
      return;
    }
    const newProducts = [...products, product]
    setProducts(newProducts)
    setCredits(newCredits)
    setTotalPrice(totalPrice + price)
  }

  return (
    <>
        <Header></Header>
        <main className='flex flex-col lg:flex-row justify-between gap-5'>
          <Courses handleAddToCart={handleAddToCart}></Courses>
          <Cart 
            products={products} 
            credits={credits}
            totalPrice={totalPrice}
          ></Cart>
          <ToastContainer />
        </main>
    </>
  )
}

export default App
