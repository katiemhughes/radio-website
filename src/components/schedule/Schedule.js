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
                    showDate="Thursday 18th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Dylan James"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Izzy Iz"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Herbal T w/ George D"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Rizu X"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 19th November"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="EJ"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="VIEUX"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName="Static Interlude"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName="Léna C"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 20th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Aitka Talo"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Shannon From Admin"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Doyle"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Mute Artefact w/ Alpine Sound"  
                />
            </table>
        </div>
    )
}

export default Schedule;