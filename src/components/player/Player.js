import React, { useState, useRef } from 'react';
import './Player.css';
import { FaPlay, FaStop } from 'react-icons/fa';

const Player = () => {

    // state
    const [isPlaying, setIsPlaying] = useState(false);

    // references
    const audioPlayer = useRef(); // referencing the audio component

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    return (
        <div className="player-wrapper">
            {/* <audio id="audio" src="http://46.101.5.204:8000/radio.mp3" http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></audio> */}
            <audio ref={audioPlayer} src="http://radio.rainycityradio.live:8000/radio.mp3" preload="metadata"></audio>
            <button className="play-btn" disabled onClick={togglePlayPause}>{ isPlaying ? <FaStop /> : <FaPlay /> }</button>
        </div>
    )
}

export default Player;
