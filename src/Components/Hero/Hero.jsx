import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-t">
                <h3>About me & my work</h3>
                <h1>Serve and Lead</h1>
            </div>

            <div className="hero-b">
                <div className="hero-b-1">
                    <FontAwesomeIcon icon="fa-solid fa-square-check" style={{ fontSize: '30px', color: "white"}}/>
                    <p>As a Software Engineer, my mission is to help you design apps that are so elegant and will help you attract clients to your business. I am here to bring clients to you.</p>
                </div>
                <div className="hero-b-2">
                    <FontAwesomeIcon icon="fa-solid fa-user" style={{ fontSize: '30px', color: "white"}}/>
                    <p>When I'm not busy, I like to play football, go out and wind down while hanging out with my friends. On most weekends I go for hiking with my friends.</p>
                </div>
                
            </div>
        
        </div>
    )
}

export default Hero
