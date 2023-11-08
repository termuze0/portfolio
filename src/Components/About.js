import React from 'react'
import AboutBg from '../Assets/a1.jpg';
import "./Styles/About.css"
export default function About() {
    return (
        <div style={{
            backgroundImage: `url(${AboutBg})`
        }} className='AboutSec'>

            <div className='AboutCont'>
                <article>
                    <p>
                    At Tech Hub, we pride ourselves on being a leading destination for technology enthusiasts. Our team of experienced professionals brings a wealth of expertise across various technology domains, ensuring that we provide top-notch guidance, support, and resources.
                    </p>
                    <p>
                    We foster a vibrant community where collaboration and innovation thrive, offering state-of-the-art facilities, access to valuable resources, mentorship programs, and networking opportunities. 
                    </p>
                    <p>
                    Whether you're an individual looking to expand your knowledge or a startup seeking to grow, Tech Hub is dedicated to empowering you and helping you succeed in the dynamic world of technology.
                    </p>
                </article>
            </div>
            </div>
    )
}
