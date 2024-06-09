import React, { useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const skillsRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClick = () => {
        window.location.href = 'mailto:${antonymurithi51@gmail.com';
    };

    return (
        <div className="header">
            <div className="header-l">
                <h1>Antony Namu</h1>
                <ul className="header-nav">
                    <li>
                        <a href="#">Past Work</a>
                    </li>
                    <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
                    <li>
                        <a href="#">Testimonial</a>
                    </li>
                </ul>
            </div>

            <div className="header-r">
                <div className="hire">
                    <a
                        href={'mailto:${antonymurithi51@gmail.com}'}
                        onClick={handleClick}
                    >
                        Hire Me ->
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
