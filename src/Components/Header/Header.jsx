import React from 'react'
import './Header.css'
const Header = () => {
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
                    <a href='#'>Hire Me -></a>
                </div>
            </div>
        </div>
        
    )
}

export default Header
