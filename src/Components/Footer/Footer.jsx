import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-t">
                <div className='footer-t-icons'>
                    <a href='https://www.facebook.com/nitomfyam.anto' target='-blank' rel='noreferrer'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{ fontSize: '20px', color: "white", backgroundColor: "111827"}} />
                    </a>
                    
                </div>
                <div className='footer-t-icons'>
                    <a href="https://www.instagram.com/digits_hub/" target='-blank' rel='noreferrer'>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ fontSize: '20px', color: "white", backgroundColor: "111827"}} />
                    </a>
                    
                </div>
                <div className='footer-t-icons'>
                    <a href="https://twitter.com/nito4nem" target='-blank' rel='noreferrer'>
                        <FontAwesomeIcon icon="fa-brands fa-twitter" style={{ fontSize: '20px', color: "white", backgroundColor: "111827"}} />
                    </a>
                </div>

            </div>
            <footer>
                <div className="footer-b">
                    &copy; 2024 @Digits Hub. All Rights Reserved
                </div>
            </footer>

        </div>
    )
}

export default Footer
