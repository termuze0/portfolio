import React from 'react'
import './Styles/Navbar.css'
import  logo from '../Assets/Logo.png'
export default function Navbar() {
  return (
    <nav className="navbar">
      <img id='logo' src={logo} alt='Logo here'/>
      <ul class="nav-links">
        <li><a href="home1">About</a></li>
        <li><a href="home1">Service</a></li>
        <li><a href="home1">Project</a></li>
        <li><a href="home1">Contact</a></li>
        
      </ul>
      <i class="fas fa-bars fa-2x" id="burger"></i>
    </nav>
  )
}
