import React from 'react'
import DashboardBody from '../../components/DashboardBody'
import DashboardNavbar from '../../components/DashboardNavbar'
import './Dashboard.css'
import '../../App.css'

const Dashboard = () => {
  return (
    <div  className='dashboard-container'>
      <DashboardNavbar />
      <DashboardBody />
    </div>
  )
}

export default Dashboard