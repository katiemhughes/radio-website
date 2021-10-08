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
                    showDate="Thursday 7th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Joey T"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Juke Joint"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Dan Traynor"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Bardusco"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 8th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="DUTTY BOY REFLEX"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Pangolin"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Mike Smaczylo"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Mike Smaczylo"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 9th October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Azusa"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Burgess"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Under the Umbrella"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Under The Umbrella"  
                />
            </table>
        </div>
    )
}

export default Schedule;