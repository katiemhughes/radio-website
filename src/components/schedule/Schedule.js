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
                    showDate="Thursday 10th March"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Fat Britney"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Izzy Iz"  
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Herbal Tea" 
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 11th March"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="Felicia Buena"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="Tommy Cross"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName= "Static Interlude w/ Jeneral Purpose"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 12th March"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Mouridis"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Rose A"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Stolen Velour"  
                />
            </table>
        </div>
    )
}

export default Schedule;