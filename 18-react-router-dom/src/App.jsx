import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/Product'
import Contact from './pages/Contact'

import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App