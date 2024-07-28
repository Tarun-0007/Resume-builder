import React from 'react'
import './ContactUs.css'
const ContactLola = () => {
  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Reach out to us through any of the following platforms:</p>
    <div className="contact-links">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/facebook1.png" alt="Facebook" className="social-icon"/>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/twitter.png" alt="Twitter" className="social-icon"/>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/linkedin.jpg" alt="LinkedIn" className="social-icon"/>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/instagram.png" alt="Instagram" className="social-icon"/>
      </a>
    </div>
  </div>
  )
}

export default ContactLola
