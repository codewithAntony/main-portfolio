import React from 'react'
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    const handleClick = () => {
        window.location.href = 'mailto:${antonymurithi51@gmail.com'
    }

    return (
        <div className='contact'>
            <div className="contact-l">
                <h2>Let's Work Together.</h2>
                <p>I am currently available for work,<br /> if you are  in need of any website app you can reach me <br /> through these contacts.</p>
            </div>

            <div className="contact-r">
                <div className='contact-r-links'>
                    <FontAwesomeIcon icon="fa-regular fa-envelope"
                    style={{ fontSize: '20px', color: "464CAC", backgroundColor: "white"}} />
                    <a href={'mailto:${antonymurithi51@gmail.com}'}
                    onClick={handleClick}>@antonymurithi51@gmail.com</a>
                </div>
                <div className='contact-r-links'>
                    <FontAwesomeIcon icon="fa-regular fa-comments"
                    style={{ fontSize: '20px', color: "464CAC", backgroundColor: "white"}} />
                    <p>+254 725 010 898</p>
                </div>
                <div className='contact-r-links'>
                    <FontAwesomeIcon icon="fa-brands fa-github" 
                    style={{ fontSize: '20px', color: "464CAC", backgroundColor: "white"}} />
                    <a href="https://github.com/codewithAntony" target='-blank' rel='noreferrer'>Github</a> 
                </div>
                <div className='contact-r-links'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" 
                    style={{ fontSize: '20px', color: "464CAC", backgroundColor: "white"}}/>
                    <a href="https://www.linkedin.com/in/antony-murithi-308291223/" target='-blank' rel='noreferrer'>LinkedIn</a>
                </div>

            </div>
        
        </div>
    )
}

export default Contact
