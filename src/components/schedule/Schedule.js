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
                    showDate="Thursday 28th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Jess Rose"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Earl Grey"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ship Sket"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="bicho raro"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 29th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="La Presidenta"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Pussy Stamina Presents High Voltage"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Alfaz"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Egg On Toast"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 30th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Bugs Groove"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Qwirk"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ellen"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Hats"  
                />
            </table>
        </div>
    )
}

export default Schedule;