import React from 'react'
import { Logo } from '../assets/icons'

const Navbar = () => {
  return (
    <div  className='navbar-container  --display-flex'>
      <div  className='logo-container'>
        <img src={Logo} alt="Kwara Lab logo" />
      </div>
      <div  className='nav-container'>
        <nav>
            <ul className='nav-container  --display-flex    thicccboi-regular'>
                <li>Home</li>
                <li>Features</li>
                <li>Book Now</li>
            </ul>
        </nav>
      </div>
      <div  className='button-container  --display-flex'>
        <button type='button'>Login</button>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
