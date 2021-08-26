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
                    showDate="Thursday 26th August"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="T.T.E."
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Sweet Nothings"
                />
                <ScheduleItem
                    showTime="20:00 - 22:00"
                    showName="Alex Milo b2b Yorlig"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 27th August"
                />
                <ScheduleItem
                    showTime="18:00 - 20:00"
                    showName="DaiSu b2b Kitsta"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ricky Chong"
                />
                <ScheduleItem
                    showTime="21:00 - 23:00"
                    showName="Under the Umbrella"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 28th August"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Mephisto"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Thtgrl"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Laura Hancock"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Maanta"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Seren Seo"
                />
            </table>
        </div>
    )
}

export default Schedule;