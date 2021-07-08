import React from 'react';

const ScheduleTakeover = (props) => {
    return (
        <tr className="show-date-row">
            <td className="takeover-show-text">
                {props.takeoverShow}
            </td>
        </tr>
    )
}

export default ScheduleTakeover;