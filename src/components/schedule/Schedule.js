import React from 'react';
import "./Schedule.css";
import "../home/Data";
import ScheduleItem from "./ScheduleItem";
import ScheduleDate from "./ScheduleDate";
// import ScheduleTakeover from "./ScheduleTakeover";

const Schedule = () => {
    return (
        <div className="schedule-container" id="schedule">
            <h1 className="schedule-title">SCHEDULE</h1>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 4th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Sahar (DNA)"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Ruby Swallow"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Andrea Trout"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 5th November"
                />
                <ScheduleItem
                    showTime="18:00 - 22:00"
                    showName="Elliott Lion b2b Liam Oliver b2b WeeDot. b2b Pangolin"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 6th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="dig B"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Charlie B"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Maracuya"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="LDV"  
                />
            </table>
        </div>
    )
}

export default Schedule;