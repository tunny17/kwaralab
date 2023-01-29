import React from 'react'
import { Logo } from '../assets/icons'
import { Link } from 'react-router-dom'

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
        <Link to='/dashboard' className='dashboard-link' >
          <button type='button' className='link-btn'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
