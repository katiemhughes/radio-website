import React from 'react';

const ScheduleDate = (props) => {
    return (
        <tr className="show-date-row">
            <td className="show-date-text">
                {props.showDate}
            </td>
        </tr>
    )
}

export default ScheduleDate;