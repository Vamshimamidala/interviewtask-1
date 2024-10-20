import React from 'react'
import './Header.css';  
const Header = () => {
  return (
    <div>
<header className="header">
    <div className="container">
      <div className="logo">DinAftale</div>
      <nav>
        <ul>
          <li><a href="/features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
    
  )
}

export default Header