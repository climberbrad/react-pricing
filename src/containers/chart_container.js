import React, {Component} from "react";
import CostChart from "../components/cost_chart";

export default class ChartContainer extends Component {

    onRegionSelect(region) {
        console.log('chart region:' + region)
    }

    render() {
        return (
            <div className="col-md-12">
                <CostChart
                    instanceType="m4.xlarge"
                    onDemandCost={[1, 2, 3, 4, 5]}
                    oneYearRiCost={[4, 4, 4, 4, 4]}
                    twoYearRiCost={[3.6, 3.6, 3.6, 3.6, 3.6]}/>
            </div>
        );
    }
}