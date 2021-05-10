import React from 'react';
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/rain-video.mp4" autoPlay loop muted /> */}
            <img src="/images/mainlogo.png" alt="Main logo" className="main-logo" />
            <h1>Broadcasting from an undisclosed location in south Manchester</h1>
        </div>
    )
}

export default HeroSection;