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
                    showDate="Thursday 2nd December"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="Rob, Rosa & Evan"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="k.h0lle"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 3rd December"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="dig B x LINTD"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="leoleoleo"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName= "Dj Jive"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName="Jess Rose b2b dig B"
                    />
                    <ScheduleItem
                        showTime="22:00 - 23:00"
                        showName="Nolou"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 4th Decemberr"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Tommy"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Charlie B"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Curl FM"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Aceca"  
                />
            </table>
        </div>
    )
}

export default Schedule;