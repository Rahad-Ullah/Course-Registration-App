
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
        <Header></Header>
        <main className='flex flex-col md:flex-row justify-between gap-6'>
          <Courses></Courses>
          <Cart></Cart>
        </main>
    </>
  )
}

export default App
