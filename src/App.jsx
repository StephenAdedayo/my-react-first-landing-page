import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Browse from './components/Browse'
import Products from './components/Products'
import Design from './components/Design'
import Furniture from './components/Furniture'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Main />
   <Browse/>
   <Products/>
   <Design />
   <Furniture/>
  <Footer/>  
   </>
  )
}

export default App
