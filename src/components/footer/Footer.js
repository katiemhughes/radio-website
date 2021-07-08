import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="left">
                    <img src="/images/footerlogo.png" alt="logo" className="logo" />
                </div>
                <div className="centre">
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe__9vaOxPR65MyM0XG7AqM4w9Ss6vYpzXOKESgS9Gec-ujpA/viewform" target="_blank" rel="noreferrer">Send a show proposal</a></li>
                    </ul>
                </div>
                <div className="right">
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
