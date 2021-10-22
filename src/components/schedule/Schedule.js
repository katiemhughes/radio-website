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
                    showDate="Thursday 21st October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Sonice"
                />
                <ScheduleItem
                    showTime="19:00 - 21:00"
                    showName="Semi Peppered w/ Donnagan, EJ and L Ben"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Izzy Iz"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 22nd October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Under The Umbrella"
                />
                <ScheduleItem
                    showTime="19:00 - 21:00"
                    showName="Now We're Duntalkin"
                />
                <ScheduleItem
                    showTime="21:00 - 23:00"
                    showName="Hardcore Chandé"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 23rd October"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="DJ Baklava"
                />
                <ScheduleItem
                    showTime="19:00 - 21:00"
                    showName="DJ Simcard b2b Harry Amstel"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Gina"  
                />
            </table>
        </div>
    )
}

export default Schedule;