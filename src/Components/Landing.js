import React from 'react'
import bgvideo from "../Assets/bgvideo.mp4"
import Navbar from './Navbar';
import "./Styles/Landing.css"
export default function Landing() {
  return (
    <div className='LandingSec'>
      <div className='background'>
        <video autoPlay loop muted id='bg'>
            <source src={bgvideo} type='video/mp4'></source>
        </video>
        
      </div>
      <Navbar />
      <div className='LandingCont'>
        <h1>Welcome to Our website</h1>
        <h4>we are </h4>
        <button className='contactBtn'>Contact us</button>
      </div>
    </div>
  );
  
}
