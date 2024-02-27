import React from 'react'
import './Header.css'
const Header = () => {
    const handleClick = () => {
        window.location.href = 'mailto:${antonymurithi51@gmail.com'
    }
    
    return (
        <div className='header'>
            <div className='header-l'>
            <h1>Antony Namu</h1>
            <ul className='header-nav'>
                <li><a href="#">Past Work</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
            </div>

            <div className='header-r'>
                <div className='hire'>
                    <a href={'mailto:${antonymurithi51@gmail.com}'}
                    onClick={handleClick}>Hire Me -></a>
                </div>
            </div>
        </div>
        
    )
}

export default Header
