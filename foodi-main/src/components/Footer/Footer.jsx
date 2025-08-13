import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, commodi saepe, excepturi quod non neque est ipsum quae possimus corrupti consequatur, consequuntur sit animi! Quaerat corporis delectus beatae quidem obcaecati.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+91-906-875-8570</li>
                <li>Contact@tomato.com</li>
            </ul>
        </div>
    
      </div>
      <hr />
      <p className='footer-copyright'>copyright 2025 Tomato.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
