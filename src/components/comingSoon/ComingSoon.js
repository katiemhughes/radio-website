import React from 'react';
import '../comingSoon/ComingSoon.css';
import '../heroSection/HeroSection.css';
import CountdownTimer from '../countdownTimer/CountdownTimer';

function ComingSoon() {

    let audio = new Audio("/audio/red-7.mp3")

    return (
            <div className="container my-container">
                <div className="row my-row">
                    <div className="col-md-4 video-col">
                        <video
                            className="promo-video"
                            src="/videos/release-trailer.mp4"
                            loop
                            autoPlay
                            muted
                        />
                        <div className="btn-row">
                            <button className="play-btn" onClick={() => audio.play()}><i class="fas fa-play"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-md-8 my-col">
                        <h1 className="coming-soon-text">Coming soon</h1>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col my-col">
                        <CountdownTimer />
                    </div>
                </div>
            </div>
    )
}

export default ComingSoon
