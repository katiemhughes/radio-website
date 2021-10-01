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
                    showDate="Thursday 30th September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Don't Meet Me At The Club"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Preacher (Chicken Shop Events)"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Izzy Iz"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Airali"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 1st October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Tommy"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Floor Function"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Atiké"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Mephisto"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 2nd October"
                />
                <ScheduleItem
                    showTime="17:00 - 19:00"
                    showName="D. Clemente b2b DJ Sweat"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Doyle"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ship Sket"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Rose A"  
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Bobo"  
                />
            </table>
        </div>
    )
}

export default Schedule;