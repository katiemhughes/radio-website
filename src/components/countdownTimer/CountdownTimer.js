import React, { useEffect, useState, useRef } from 'react';
import '../countdownTimer/CountdownTimer.css';

const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('July 10, 2021 00:00:00').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        const newTime = interval.current
        return () => {
            clearInterval(newTime);
        };
    });

    return (
        <section className="timer-container">
                <div className="timer">
                    <section className="timer-section">
                        <p>{timerDays}</p>
                        <p><h6>Days</h6></p>
                    </section>
                    <span>:</span>
                    <section className="timer-section">
                        <p>{timerHours}</p>
                        <p><h6>Hours</h6></p>
                    </section>
                    <span>:</span>
                    <section className="timer-section">
                        <p>{timerMinutes}</p>
                        <p><h6>Minutes</h6></p>
                    </section>
                    <span>:</span>
                    <section className="timer-section">
                        <p>{timerSeconds}</p>
                        <p><h6>Seconds</h6></p>
                    </section>
                </div>
        </section>
    )
}

export default CountdownTimer
