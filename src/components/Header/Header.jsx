import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
            <nav>
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact-us">Contact-Us</NavLink>
                
              
            
               
            </nav>
    </div>
  )
}

export default Header