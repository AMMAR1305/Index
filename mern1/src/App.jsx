import React from 'react'
import User from './components/User'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Services from './Components/Pages/Services'
import Forms from './Components/Pages/Forms'
import State from './Hooks/State'
import Like from './Hooks/Like'


const App = () => {
 
  return (
  <BrowserRouter>

  <Navbar />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About } />
        <Route path="/contact" component={Contact} />
        <Route path="/forms" component={Forms } />
        <Route path="/service" component={Services} />

      </Routes>
       <Forms/> 
      <State />
      <Like />


     
  </BrowserRouter>
  
  )
}

export default App