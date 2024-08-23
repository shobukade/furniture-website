import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar =()=>{
  return (
    <>
      <nav className='container'>
       <img src={logo} alt="" className='logo'/> 
       <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li><button class='btn'>Contact Us</button></li>
       </ul>
      </nav>
          </>
  )
}

export default Navbar
