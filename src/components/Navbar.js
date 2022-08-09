import React from 'react'
import {Link ,NavLink} from "react-router-dom"

const Navbar = () => {
  return ( <nav>
     <NavLink to="/" className='nav-link'>Home</NavLink>
     <Link to="/contact" className='nav-link'>Contact</Link>
     <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
     <NavLink to="/about" className='nav-link'>About</NavLink>
  </nav>
    
  )
}

export default Navbar