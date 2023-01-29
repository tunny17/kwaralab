import React from 'react'
import { DashboardBody, DashboardNavbar } from '../../components/Dashboard'
import './Dashboard.css'
import '../../App.css'

const Dashboard = () => {
  return (
    <div  className='bodyContainer'>
      <div className='dashboard-container'>
        <DashboardNavbar />
      </div>
      <DashboardBody />
    </div>
  )
}

export default Dashboard