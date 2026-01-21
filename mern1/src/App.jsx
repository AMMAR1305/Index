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
import Effect from './Hooks/Effect'


const App = () => {
 
  return (
  <BrowserRouter>

  <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About } />
        <Route path="/contact" Component={Contact} />
        <Route path="/forms" Component={Forms } />
        <Route path="/service" Component={Services} />
        <Route path="/state" Component={State} />
        <Route path="/like" Component={Like} />
        <Route path="/effect" Component={Effect} />

      </Routes>
       


     
  </BrowserRouter>
  
  )
}

export default App