import React, {Component} from "react";
import {connect} from "react-redux";
import CostChart from "../components/cost_chart";

export class ChartContainer extends Component {

    render() {
        if (this.props.price != '') {
            console.log('graph price: ', this.props.price);

            var instanceType = this.props.price[0][0].instanceType;
            return (
                <div className="col-md-12">
                    <CostChart
                        instanceType={instanceType}
                        onDemandCost={[1, 2, 3, 4, 5]}
                        oneYearRiCost={[4, 4, 4, 4, 4]}
                        twoYearRiCost={[3.6, 3.6, 3.6, 3.6, 3.6]}/>
                </div>
            );
        }
        return <div></div>
    }
}

// state mapping
function mapStateToProps({price}) {
    return {price}; // { price: state.price }
}

export default connect(mapStateToProps)(ChartContainer);