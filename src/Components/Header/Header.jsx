import React from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FaArrowRight } from 'react-icons/fa6';

const Header = () => {
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
                    <li>
                        <Link to="#skill" smooth>
                            Skills
                        </Link>
                    </li>
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
                        Hire Me
                        <FaArrowRight className="right-arrow" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
