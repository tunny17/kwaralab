import React from 'react'
import { Ellipse } from '../assets/icons'

const Body4 = () => {
  return (
    <div  className='body4-container'>
        <div className='card-container'>
            <div  className='text-container --display-flex'>
                <img src={Ellipse} alt="" className='ellipse' />
                <h3>Join Our Mailing List 🎉</h3>
                <h1>Be the first to get our weekly health updates and life-saving tips.</h1>
            </div>
            <div  className='fields'>
                <input type="email" name="" id="" placeholder='Email' />
                <button type='button'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Body4