import React from 'react';
import "./HeroSection.css";
import "../home/Data";

const HeroSection = ({ topLine, img, alt }) => {
    return (
        <div className="hero-container">
            {/* <video src="/videos/rain-video.mp4" autoPlay loop muted /> */}
            <img src={img} alt={alt} className="main-logo" />
            <h1>{topLine}</h1>
        </div>
    )
}

export default HeroSection;