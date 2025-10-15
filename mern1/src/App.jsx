import React from 'react'
import User from './components/User'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Services from './Components/Pages/Services'


const App = () => {
 
  return (
  <BrowserRouter>

  <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>


      <h2>A </h2>
  </BrowserRouter>
  
  )
}

export default App