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
                    showDate="Thursday 2nd September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Acidhousedeathsquad"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Curl FM"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Paryah"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="DJ MC Klaus and Oggy OG"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 3rd September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="dig B vs Pussy Stamina"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Marley"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Doyle"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Great Danes"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Great Danes"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 4th September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Herbal Tea w/ George D"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Fat Britney"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Weedot."
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Jack Wood"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Insurrect"
                />
            </table>
        </div>
    )
}

export default Schedule;