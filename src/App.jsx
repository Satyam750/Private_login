import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Product from './component/Product'
import Login from './component/Login'
import Private from './component/Private'

const App = () => {
  return (
    <BrowserRouter>
    <div className='text-white '>

    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
      <Routes>
        <Route path='/product' element={
            <Private>
              <Product/>
            </Private>
        }/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
 
    
      
    </div>
      
    </BrowserRouter>
  )
}

export default App