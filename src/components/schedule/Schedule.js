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
                    showDate="Thursday 13th January"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Yahuru"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Izzy Iz"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Herbal Tea w/ George D"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Treece"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 14th January"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="The Empress"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="Tom"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName= "Static Interlude"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 15th January"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Allecto"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Rose A"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Poison Ivy"  
                />
            </table>
        </div>
    )
}

export default Schedule;