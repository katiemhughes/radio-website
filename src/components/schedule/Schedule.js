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
                    showDate="Thursday 5th August"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Arctype"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Motor City Donk Ensemble"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Izzy Iz"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Jess Rose"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 6th August"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Tom Dawson"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Mystique"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Skiptrace DJs"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Sozaboi"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 7th August"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Gina"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Acidhousedeathsquad"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Thtgrl"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Insurrect"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Ben Daddy"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="DJ Simcard b2b Harry Amstel"
                />
            </table>
        </div>
    )
}

export default Schedule;