import React from 'react'
import { calendar, profile } from '../../assets/icons'

const DashboardNavbar = () => {
  return (
    <div    className='navigation-container'>
       <div className='profile'>
        <figure>
          <img src={profile} alt="" />
          <figcaption>Damola Seyi</figcaption>
          <figcaption>inaamajay007@gmail.com</figcaption>
        </figure>
       </div>
       <div className='navbar'>
        <ul>
          <li className='dashboard-nav-link'>Dashboard</li>
          <li className='patients'>Patients</li>
          <li className='medics'>Medics</li>
          <li className='chats'>Chats</li>
          <li className='payment'>Payment</li>
          <li className='settings'>Settings</li>
        </ul>
        <img src={calendar} alt="" className='calendar' />
       </div>
    </div>
  )
}

export default DashboardNavbar