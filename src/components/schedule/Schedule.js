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
                    showDate="Thursday 10th February"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="GINA"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Izzy Iz"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Herbal Tea w/ George D"    
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 11th February"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="Tommy Cross"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="Kiss Me Again"
                    />
                    <ScheduleItem
                        showTime="20:00 - 22:00"
                        showName= "Tough Act"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 12th February"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="Sahar"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Rose A w/ Loney"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Pangolin"  
                />
            </table>
        </div>
    )
}

export default Schedule;