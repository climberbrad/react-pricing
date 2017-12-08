import React from "react";

export default (props) => {
    return (
        <div>
            <div className="cost-bar col-md-12"><h4>Total Cost</h4></div>
            <div className="col-md-12 item-cost-container">
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Usage</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>On Demand</td>
                        <td>${props.onDemand}</td>
                    </tr>
                    <tr>
                        <td>Partial Upfront</td>
                        <td>${props.partialUpfront}</td>
                    </tr>
                    <tr>
                        <td>No Upfront</td>
                        <td>${props.noUpfront}</td>
                    </tr>
                    <tr>
                        <td>All Upfront</td>
                        <td>${props.allUpfront}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}