import React from 'react'
import bgvideo from "../Assets/bgvideo.mp4"
import "./Styles/Landing.css"
export default function Landing() {
  return (
    <div className='LandingSec'>
    
    <video autoPlay loop muted id='bg'>
        <source src={bgvideo} type='video/mp4'></source>
    </video>
    <p>hh</p>
    <div>
        hello
    </div>
    </div>
  );
  
}
