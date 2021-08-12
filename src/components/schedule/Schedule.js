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
                    showDate="Thursday 12th August"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Places and Spaces"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Fred Salt"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Lev"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Elia"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 13th August"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Miss Ridd"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Hanz"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Carmen"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Egg On Toast"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 14th August"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Polly (Loose Fit)"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Lo5ive (Kultura Collective)"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Pod Imiya"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Chandé"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Hardcore Soy"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Cam Spen"
                />
            </table>
        </div>
    )
}

export default Schedule;