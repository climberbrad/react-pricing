import React from 'react';

export default (props) => {
    return (
        <select className="drop-down">
            <option hidden>Instance Type</option>
            <option>m4.large</option>
            <option>m4.xlarge</option>
            <option>m4.2xlarge</option>
            <option>m4.4xlarge</option>
            <option>m4.10xlarge</option>
            <option>m4.16xlarge</option>
        </select>
    );
}