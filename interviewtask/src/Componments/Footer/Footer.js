import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">DinAftale</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 DinAftale. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
