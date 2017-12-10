import React from "react";

export default (props) => {
    return (
        <tr>
            <td className="table-data">{props.instanceType}</td>
            <td className="table-data">{props.region}</td>
            <td className="table-data">{props.termType}</td>
            <td className="table-data">{props.leaseContractLength}</td>
            <td className="table-data">{props.purchaseOption}</td>
            <td className="table-data">{props.offeringClass}</td>
            <td className="table-data">${props.pricePerUnit}</td>
            <td className="table-data">{props.memory}</td>
            <td className="table-data">{props.networkPerformance}</td>
            <td className="table-data">{props.vcpu}</td>
            <td className="table-data">{props.storage}</td>
        </tr>
    );
}