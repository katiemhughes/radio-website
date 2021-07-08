import React from 'react';

const ScheduleItem = (props) => {
    return (
        <tr>
            <td>
                {props.showTime}
            </td>
            <td className="show-name-text">
                {props.showName}
            </td>
        </tr>
    )
}

export default ScheduleItem;
