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
                    showDate="Thursday 9th September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Under the Umbrella"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Bugs Groove"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Mouridis"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Lucille"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 10th September"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Static Interlude"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Aisling"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="DJ Netflex"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Levi Love"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Kultura Collective"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 10th September"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Billy Boome"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Holly"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Salt Pillar"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Face2Face"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="DJ Project Manager"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Gibbin b2b Cam Spen"
                />
            </table>
        </div>
    )
}

export default Schedule;