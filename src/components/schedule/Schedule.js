import React from 'react';
import "./Schedule.css";
import "../home/Data";
import ScheduleItem from "./ScheduleItem";
import ScheduleDate from "./ScheduleDate";
import ScheduleTakeover from "./ScheduleTakeover";

const Schedule = () => {
    return (
        <div className="schedule-container" id="schedule">
            <h1 className="schedule-title">SCHEDULE</h1>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Thursday 15th July"
                />
                {/* <ScheduleItem
                    showTime="16:00 - 17:00"
                    showName="Joey T"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Ellen"
                /> */}
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Dig B"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Charlie B"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ben Daddy"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="iz.wav"
                />
                {/* <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Ship Sket"
                />
                <ScheduleItem
                    showTime="23:00 - 00:00"
                    showName="Earl Grey"
                /> */}
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 16th July"
                />
                <ScheduleTakeover 
                    takeoverShow="Not Bad for a Girl and friends"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Pussy Stamina"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Maracuya"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Moll"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Mystery Set"
                />
                {/* <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="MOLL"
                /> */}
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 17th July"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Talking Shop"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Dig B"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Mercy System fka Monir"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Shannon From Admin"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Kiss Me Again"
                />
                {/* <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="TBC"
                /> */}
            </table>
        </div>
    )
}

export default Schedule;