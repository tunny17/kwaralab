import React from 'react'
import { Candle } from '../assets/icons'

const Body2 = () => {
  return (
    <div  className='body1-container  body2-container'>
        <div  className='body-container'>
            <div className="body2">
                <img src={Candle} alt="" className='candle  float' />
            </div>
            <div    className='left new-left'>
                <h3>The Right Healthcare For You</h3>
                <h1>Farewell to a Pile Documents. Track Your Medical Reports in <br /> Our Dashboard</h1>
                <hr />
                <h3>User Friendly Dashbaord</h3>
                <h3>Modern Health System</h3>
            </div>
        </div>
        <button type='button'>Book Now</button>
    </div>
  )
}

export default Body2