import React, { useState } from 'react';
import "./Navbar.css";
import {Link, animateScroll as scroll} from 'react-scroll';
import Player from '../player/Player';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    // const play = () => {
    //   let audio = document.getElementById("audio");
    //   audio.play();
    // }

    return (
        <>
        <div className="wrapper">
          <div className="top-nav">
            <div className="left">
              <a href="/" className="logo-container">
                <img src="/images/navbarlogo.png" alt="logo" className="logo" onClick={toggleHome} />
              </a>
            </div>
            <div className="centre">
              <ul className={click ? "nav-menu-active" : "nav-menu"}>
              <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="home"
                    onClick={closeMobileMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active">
                      Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    to="picks" 
                    onClick={closeMobileMenu} 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80}
                    activeClass="active">
                      Picks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="schedule"
                    onClick={closeMobileMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active">
                      Schedule
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/archives"
                    onClick={closeMobileMenu}>
                      Archives
                  </a>
                </li> */}
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="about"
                    onClick={closeMobileMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active">
                      About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars" } />
              </div>
              <ul>
                <li><a href="https://www.instagram.com/rainycityradio" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/rainycityradiomcr" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                <li><a href="mailto:info@rainycityradio.live" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="bottom-nav">
            <div className="bottom-left">
              <ul>
                <li><div className="circle red"></div></li>
                {/* Write "ON" instead of "OFF" (or vice versa) */}
                <li>ON AIR</li>
                <div className="audio-player-container">
                  <Player />
                  {/* Inside the p tags here, write the DJ's name */}
                  <p className="audio-player-text">Ship Sket w/ Poundshop</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

export default Navbar;