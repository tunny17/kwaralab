import React, { useState, useEffect } from 'react'
import Appointment from './Dashboard/Appointment'
import axios from 'axios'

const DashboardBody = () => {
  const [patient, setPatient] = useState([]);

  
  useEffect(() => {
    (async () => {
      try{
        const { data: { patient } } = await axios.get('data.json');
        setPatient(patient);
      }catch(error){
        console.log(error)
      }
    })()
  }, [])

  return (
    <div  className='dashboardBody-container'>
      <div className="body-hero">
        <div  className='box-container'>
          {
            patient.map((product) =>  <Appointment key={product.id} patient={patient} /> )
          }
        </div>
      </div>
      <div className="middle-section"></div>
      <div className="bottom-section"></div>
    </div>
  )
}

export default DashboardBody