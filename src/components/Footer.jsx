import React from 'react'
import { Footer1, Footer2, Footer3, Footer4, Logo } from '../assets/icons'

const Footer = () => {
  return (
    <footer>
      <div className="footer-details">
        <div className="left-details">
          <img src={Logo} alt="" />
          <h4>Complete suit of highly personalized health services </h4>
        </div>
        <div className="right-details">
          <ul>
            <h3>Treatment</h3>
            <li>Gynaecology</li>
            <li>Pediatrics</li>
            <li>Orthopedics</li>
            <li>Family Medicine</li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Report Issue</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <h3>Legal</h3>
            <li>Payment Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>
      <div className='bottom-footer'>
        <div>
          <p>(c) Copyright 2022. All right reserved.</p>
        </div>
        <div>
          <p>Terms of Service   |   Privacy Policy</p>
        </div>
        <div>
          <img src={Footer1} alt="" />
          <img src={Footer2} alt="" />
          <img src={Footer3} alt="" />
          <img src={Footer4} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer