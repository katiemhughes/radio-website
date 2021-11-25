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
                    showDate="Thursday 25th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Ivy Scott"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Earl Grey"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Ship Sket w/ Poundshop"
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="bicho raro"
                />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Friday 26th November"
                    />
                    <ScheduleItem
                        showTime="18:00 - 19:00"
                        showName="La Presidenta"
                    />
                    <ScheduleItem
                        showTime="19:00 - 20:00"
                        showName="Pussy Stamina presents High Voltage"
                    />
                    <ScheduleItem
                        showTime="20:00 - 21:00"
                        showName= "Alfaz"
                    />
                    <ScheduleItem
                        showTime="21:00 - 22:00"
                        showName="dig B"
                    />
                    <ScheduleItem
                        showTime="22:00 - 23:00"
                        showName="Nolou"
        />
            </table>
            <table className="schedule-table">
                <ScheduleDate 
                    showDate="Saturday 27th November"
                />
                <ScheduleItem
                    showTime="18:00 - 19:00"
                    showName="Vastechoses"
                />
                <ScheduleItem
                    showTime="19:00 - 20:00"
                    showName="Melly_D"
                />
                <ScheduleItem
                    showTime="20:00 - 21:00"
                    showName="Lathe"  
                />
                <ScheduleItem
                    showTime="21:00 - 22:00"
                    showName="Scapa"  
                />
            </table>
        </div>
    )
}

export default Schedule;