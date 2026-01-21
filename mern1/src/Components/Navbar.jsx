import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/state">UseState</Link>
      <Link to="/like">UseLike</Link>
      <Link to="/effect">UseEffect</Link>
    </nav>
  )
}

export default Navbar