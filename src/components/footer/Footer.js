import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="left">
                    <img src="/images/footerlogo.png" alt="logo" className="logo" />
                </div>
                <div className="footer-right">
                <ul className="footer-nav-menu">
                    <li className="nav-item">Artwork by <a href="https://www.crystallui.com/" target="_blank" rel="noreferrer">Crystal Lui</a></li>
                    <li className="nav-item">Website made with ❤️ by <a href="https://lucid-hopper-63096a.netlify.app/" target="_blank" rel="noreferrer">Katie Hughes</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;
