import React from 'react';

export default (props) => {
    return (
        <select className="drop-down" onChange={props.selected}>
            <option hidden>Offering Class</option>
            <option>Standard</option>
            <option>Convertible</option>
        </select>
    );
}