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
                    showDate="Thursday 23rd September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Semi Peppered w/ EJ & Donnagan"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Radio Free Manchester"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Codex"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Under the Umbrella"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 24th September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Shawn Cartier b2b Dufraine"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Medulasa"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Hannah O'Gorman"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="JavierJoeK"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 25th September"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Elektraversion"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Ghoulish b2b Nova Cheq b2b Maracuya"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Ghoulish b2b Nova Cheq b2b Maracuya"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Bomabrd Groove"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Bombard Groove"  
                />
            </table>
        </div>
    )
}

export default Schedule;