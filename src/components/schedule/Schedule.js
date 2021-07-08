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
                    showDate="Saturday 10th July"
                />
                <ScheduleItem
                    showTime="16:00 - 17:00"
                    showName="Joey T"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Ellen"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="La Presidenta"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Dig B b2b Maracuya"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Team GB"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Salt Pillar"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Ship Sket"
                />
                <ScheduleItem
                    showTime="23:00 - 00:00"
                    showName="Earl Grey"
                />
            </table>
            {/* <table>
                <ScheduleDate 
                    showDate="Thursday 15th July"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Rhys Evans"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Jungle Julia"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Gina B"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="iz.wav"
                />
            </table>
            <table>
                <ScheduleDate 
                    showDate="Friday 16th July"
                />
                <ScheduleTakeover 
                    takeoverShow="Not Bad for a Girl Takeover"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="DaiSu"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Egg On Toast"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="MOLL"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="ThtGrl"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Velmz"
                />
            </table>
            <table>
                <ScheduleDate 
                    showDate="Saturday 17th July"
                />
                <ScheduleItem
                    showTime="17:00 - 18:00"
                    showName="Treehouse b2b Rose A"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Charlie B b2b Pussy Stamina"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Monir"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Mix-Stress"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Kiss Me Again"
                />
                <ScheduleItem
                    showTime="22:00 - 23:00"
                    showName="Poison Ivy"
                />
            </table> */}
        </div>
    )
}

export default Schedule;