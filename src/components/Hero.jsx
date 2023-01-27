import React from 'react'
import { Dashboard, Chats } from '../assets/icons'

const Hero = () => {
  return (
    <div    className='hero-container'>
      <div className='hero-text   --display-flex'>
        <h1 className='thicccboi-medium'>Living a Healthy and Longer Life</h1>
        <p  className='thicccboi-light'>Receive exceptional healthcare services such as urgent care, therapy & integrative medical care</p>
        <button type='button' className='thicccboi-medium'>Book Now</button>
      </div>
      <div  className='image-container'>
        <img src={Dashboard} alt="A dashboard"  className='dashboard' />
        <img src={Chats} alt="A chat log" className='chat-log' />
      </div>
    </div>
  )
}

export default Hero