import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/navbar.css';
export default function Navbar() {
    return (
        <ul className='navbar'>
        <li className='navbar'>
        <span></span>
          <Link to='/contact' className='nav-link'>
             Contact
          </Link>
          <span></span>
          <Link to='/portfolio' className='nav-link'>
            Portfolio
         </Link>
         <span></span>
          <Link to='/' className='nav-link'>
            Home
         </Link>
        </li>
    </ul>
  )
}






