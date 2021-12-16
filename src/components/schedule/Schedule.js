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
                    showDate="Thursday 16th December"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Izzy Iz w/ Alf"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="GINA"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Herbal Tea w/ George D"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Airpodz"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 17th December"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="Saltpeter"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="Tom2trax"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName= "Flore"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 18th Decemberr"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Marley"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Leala-Rain"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="NIIX"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Rose A"  
                />
            </table>
        </div>
    )
}

export default Schedule;