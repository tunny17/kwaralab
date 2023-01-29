import React from 'react'

const Appointment = (patient) => {
  return (
    <div>
        {console.log(patient)}
        <div className="box">
            <p>Previous Appointments</p>
            <p>147</p>
            <p>Updated hour ago</p>
        </div>
    </div>
  )
}

export default Appointment