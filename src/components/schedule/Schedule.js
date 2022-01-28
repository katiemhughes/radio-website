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
                    showDate="Thursday 27th January"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="MIRE"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Felicia Buena"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 28th January"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="YUQQ"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName="Fat Britney"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName= "JEROME"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 29th January"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="Charlie B w/ Hannah O'Gorman"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="DJ Project Manager"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Jess Rose"  
                />
            </table>
        </div>
    )
}

export default Schedule;