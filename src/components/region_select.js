import React from 'react';


// props = select
export default (props) => {
    return (
        <select className="drop-down" onChange={props.selected}>
            <option hidden>Region</option>
            <option>us-east-1</option>
            <option>us-east-2</option>
            <option>us-west-1</option>
            <option>us-west-2</option>
            <option>ca-central-1</option>
            <option>eu-west-1</option>
            <option>eu-central-1</option>
            <option>eu-west-2</option>
            <option>ap-northeast-1</option>
            <option>ap-northeast-2</option>
            <option>ap-southeast-1</option>
            <option>ap-southeast-2</option>
            <option>ap-south-1</option>
            <option>sa-east-1</option>
            <option>us-gov-west-1</option>
        </select>
    );
}