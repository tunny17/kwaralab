import React from 'react'
import { calendar, profile } from '../assets/icons'

const DashboardNavbar = () => {
  return (
    <div    className='navigation-container'>
       <div className='profile'>
        <img src={profile} alt="" />
       </div>
       <div className='navbar'>
        <ul>
            <li>Dashboard</li>
            <li>Patients</li>
            <li>Medics</li>
            <li>Chats</li>
            <li>Payment</li>
            <li>Settings</li>
        </ul>
        <img src={calendar} alt="" />
       </div>
    </div>
  )
}

export default DashboardNavbar