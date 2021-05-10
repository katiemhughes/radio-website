import React, { useState } from 'react';
import  { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <div className="wrapper">
          <div className="top-nav">
            <div className="left">
              <div className="logo-container">
                <img src="/images/logo.png" alt="logo" className="logo" />
              </div>
            </div>
            <div className="centre">
              <ul className={click ? "nav-menu-active" : "nav-menu"}>
                <li className="nav-item"><Link className="nav-link" to="/picks" onClick={closeMobileMenu}>Picks</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/schedule" onClick={closeMobileMenu}>Schedule</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/archives" onClick={closeMobileMenu}>Archives</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeMobileMenu}>About</Link></li>
              </ul>
            </div>
            <div className="right">
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-twitter"></i></li>
              </ul>
            </div>
          </div>
          <div className="bottom-nav">
            <div className="bottom-left">
              <ul>
                <li><div className="circle red"></div></li>
                <li>ON AIR</li>
                <li><i className="fas fa-play" />Name of current radio show</li>
              </ul>
            </div>
          </div>
        </div>
            {/* <nav className="navbar">
                <div className="top-nav">
                    <div className="logo-container">
                        <Link to="/" className="navbar-logo">
                            <img src="/images/logo.png" alt="logo" className="logo" />
                        </Link>
                    </div>
                    <div className="navbar-container">
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/picks" className="nav-links" onClick={closeMobileMenu}>
                                    Picks
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Schedule
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/residents" className="nav-links" onClick={closeMobileMenu}>
                                    Residents
                                </Link>
                            </li> */}
                            {/* // <li className="nav-item">
                            //     <Link to="/residents" className="nav-links" onClick={closeMobileMenu}>
                            //         Archives
                            //     </Link>
                            // </li> */}
                            {/* <li className="nav-item">
                                <Link to="/genres" className="nav-links" onClick={closeMobileMenu}>
                                    Genres
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to="/store" className="nav-links" onClick={closeMobileMenu}>
                                    Store
                                </Link>
                            </li> */}
                        {/* //     <li className="nav-item">
                        //         <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                        //             About
                        //         </Link>
                        //     </li>
                        // </ul> */}
                        {/* <div className="socials-footer">
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                        </div> */}
                    {/* // </div> */}
                {/* //     <div className="nav-socials-container">
                //         <i class="fab fa-instagram"></i>
                //         <i class="fab fa-facebook"></i>
                //         <i class="fab fa-twitter"></i>
                //     </div>
                // </div> */}
                {/* // <div className="bottom-nav">
                //   <ul className="nav-menu">
                //     <li className="nav2-item">ON AIR</li>
                //     <li className="nav2-item"><div class="circle red"></div></li>
                //     <li className="nav2-item"><i className="fas fa-play"></i>Name of current radio show</li>
                //   </ul>
                // </div>
            // </nav> */}
        </>
    )
}

export default Navbar;