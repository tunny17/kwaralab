import React from 'react'
import { Green1, Green2 } from '../assets/icons'

const Body1 = () => {
  return (
    <div  className='body1-container'>
        <div  className='body-container'>
            <div    className='left'>
                <h3>Where Wellness Meets Tech</h3>
                <h1>Our professionals can help you get your life back on track</h1>
                <hr />
                <h3>Virtual Healthcare</h3>
                <h3>Accessibility</h3>
            </div>
            <div className="right">
                <img src={Green1} alt="" />
                <img src={Green2} alt="" />
            </div>
        </div>
        <button type='button'>Book Now</button>
    </div>
  )
}

export default Body1