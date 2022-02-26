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
                <li><a href="https://www.mixcloud.com/RainyCityRadio" target="_blank" rel="noreferrer"><svg className="mixcloud-icon" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Mixcloud icon</title><path d="M21.95 19.062c-.154 0-.31-.045-.445-.135-.369-.25-.465-.75-.225-1.11.738-1.094 1.125-2.381 1.125-3.719s-.387-2.625-1.125-3.721c-.249-.368-.145-.866.216-1.106.375-.249.87-.146 1.108.214.917 1.365 1.396 2.97 1.396 4.62 0 1.648-.479 3.254-1.396 4.619-.135.239-.39.359-.645.359l-.009-.021zM19.66 17.768c-.153 0-.308-.045-.445-.139-.369-.239-.463-.734-.215-1.094.489-.721.747-1.545.747-2.43 0-.855-.258-1.695-.747-2.431-.248-.36-.154-.854.215-1.095s.857-.15 1.106.225c.669.99 1.021 2.145 1.021 3.314 0 1.201-.352 2.34-1.021 3.315-.146.24-.406.36-.661.36v-.025zm-3.73-7.153c-.314-3.197-3.016-5.699-6.3-5.699-2.721 0-5.13 1.748-5.995 4.283C1.588 9.501 0 11.269 0 13.4c0 2.344 1.912 4.254 4.26 4.254h10.908c1.964 0 3.566-1.594 3.566-3.557 0-1.706-1.2-3.129-2.805-3.48v-.002zm-.762 5.446H4.263c-1.466 0-2.669-1.191-2.669-2.658 0-1.465 1.193-2.658 2.669-2.658.71 0 1.381.285 1.886.781.3.314.811.314 1.125 0 .3-.301.3-.811 0-1.125-.555-.542-1.231-.931-1.965-1.111.75-1.665 2.43-2.774 4.305-2.774 2.609 0 4.74 2.129 4.74 4.738 0 .512-.075 1.006-.24 1.486-.135.42.09.869.51 1.02.074.03.165.045.24.045.33 0 .645-.211.75-.54.105-.315.18-.63.225-.96.734.285 1.26 1.005 1.26 1.83 0 1.096-.885 1.979-1.965 1.979l.034-.053z"/></svg></a></li>
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
                  <p className="audio-player-text">Charlie B</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

export default Navbar;