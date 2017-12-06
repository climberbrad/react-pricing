import React, {Component} from "react";
import CostChart from "../components/cost_chart";
import RegionSelect from "../components/region_select";
import InstanceTypeSelect from "../components/instance_type_select";

export default class ChartContainer extends Component {

    onRegionSelect(region) {
        console.log('chart region:' + region)
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6"><RegionSelect select={this.onRegionSelect}/></div>
                <div className="col-md-6"><InstanceTypeSelect/></div>

                <div className="col-md-12">
                    <CostChart
                        instanceType="m4.xlarge"
                        onDemandCost={[1, 2, 3, 4, 5]}
                        oneYearRiCost={[4, 4, 4, 4, 4]}
                        twoYearRiCost={[3.6, 3.6, 3.6, 3.6, 3.6]}/>
                </div>
            </div>
        );
    }
}