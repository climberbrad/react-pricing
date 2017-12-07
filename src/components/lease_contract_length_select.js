import React from 'react';

export default (props) => {
    return (
        <select className="drop-down" onChange={props.selected}>
            <option hidden>Lease Contract Length</option>
            <option>1yr</option>
            <option>3yr</option>
        </select>
    );
}