import React from 'react'
import { Editor, LiveChat, Messaging, PhoneCall } from '../assets/icons'

const Body3 = () => {
  return (
    <div  className='body1-container  body3-container'>
        <div  className='body-container'>
            <div    className='left body3-left'>
                <h3>Let’s talk about your health</h3>
                <h1>Book an Online Consultation With a Doctor</h1>
                <hr />
                <h3>Get Matched With A Doctor</h3>
                <h3>Define Your Symptoms</h3>
            </div>
            <div className="body3">
                <img src={Editor} alt="" />
            </div>
        </div>
        <div  className='bottom-image'>
            <figure>
                <img src={LiveChat} alt="" />
                <figcaption>Live Chat</figcaption>
            </figure>
            <figure>
                <img src={Messaging} alt="" />
                <figcaption>In-App Messaging</figcaption>
            </figure>
            <figure>
                <img src={PhoneCall} alt="" />
                <figcaption>Phone Call</figcaption>
            </figure>
        </div>
        <button type='button'>Get in Touch</button>
    </div>
  )
}

export default Body3