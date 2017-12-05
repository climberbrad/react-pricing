import React from "react";

export default (props) => {
    return (
        <tr>
            <td>{props.instanceType}</td>
            <td>{props.region}</td>
            <td>{props.termType}</td>
            <td>{props.leaseContractLength}</td>
            <td>{props.purchaseOption}</td>
            <td>{props.offeringClass}</td>
            <td>${props.pricePerUnit}</td>
        </tr>
    );
}