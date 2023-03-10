import React from 'react'
// import axios from 'axios'
import { Doctors, medicalD, medicalH, notepad, traffic } from '../../assets/icons'
import { DashboardNavbar } from '../../components/Dashboard'

const DashboardBody = () => {
//   const [patient, setPatient] = useState([]);

  
// axios useEffect function for the json data
//   useEffect(() => {
//     (async () => {
//       try{
//         const { data: { patient } } = await axios.get('data.json');
//         setPatient(patient);
//       }catch(error){
//         console.log(error)
//       }
//     })()
//   }, [])

  return (
    <div  className='dashboardBody-container'>
        <div className='dashboard-container'>
            <DashboardNavbar />
        </div>
      <div className="body-hero">
        <div  className='box-container'>
          {/* {
            patient.map((product) =>  <Appointment key={product.id} patient={patient} /> )
          } */}
          <div className="box">
            <p>Previous Appointments</p>
            <p>147</p>
            <p>Updated hour ago</p>
          </div>
          <div className="box">
            <p>Previous Appointments</p>
            <p>147</p>
            <p>Updated hour ago</p>
          </div>
          <div className="box third">
            <p>Previous Appointments</p>
            <p>147</p>
            <p>Updated hour ago</p>
          </div>
          <div className="box fourth">
            <p>Previous Appointments</p>
            <p>147</p>
            <p>Updated hour ago</p>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div  className='middle1'>
          <div  className='p'>
            <p>Doctors on Duty</p>
            <p>View All</p>
          </div> 
          <div>
            <img src={Doctors} alt="" />
          </div>
        </div>
        <div  className='middle2'>
          <div  className='p'>
            <p>Doctors on Duty</p>
            <p>View All</p>
          </div> 
          <div className='content'>
            <img src={medicalH} alt="" />
            <img src={medicalD} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <img src={traffic} alt="" />
        <img src={notepad} alt="" />
      </div>
    </div>
  )
}

export default DashboardBody