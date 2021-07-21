import React from 'react';
import "./Schedule.css";
import "../home/Data";
import ScheduleItem from "./ScheduleItem";
import ScheduleDate from "./ScheduleDate";
import ScheduleTakeover from "./ScheduleTakeover";

const Schedule = () => {
    return (
        <div className="schedule-container" id="schedule">
            <h1 className="schedule-title">SCHEDULE</h1>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 22nd July"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="DaiSu"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="SaltPeter"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Trax Haven"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 23rd July"
                />
                <ScheduleTakeover 
                    takeoverShow="Noire State Takeover"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Insurrect"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Burgess"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Manny P"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Azusa"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 24th July"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Desodah"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Alfaz"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Ayy Den"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="D. Clemente"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Kitsta"
                />
            </table>
        </div>
    )
}

export default Schedule;