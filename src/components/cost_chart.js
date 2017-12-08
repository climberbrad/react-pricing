import React, {Component} from "react";
import ReactHighcharts from "react-highcharts";


// 8760 hours per year
export default class CostChart extends Component {
    constructor(props) {
        super(props);
    }

    graphConfig() {
        let seriesDataList = []
        seriesDataList.push({name: "On Demand", data: this.props.onDemandCost});
        seriesDataList.push({name: "No Upfront RI (" + this.props.leaseContractLength + ")", data: this.props.oneYearRiCost});
        seriesDataList.push({name: "Partial Upfront RI (" + this.props.leaseContractLength + ")", data: this.props.twoYearRiCost});
        seriesDataList.push({name: "All Upfront (" + this.props.leaseContractLength + ")", data: this.props.allUpfrontCost});

        let config = {
            chart: {
                type: 'line'
            },
            title: {
                text: this.props.instanceType
            },
            xAxis: {
                title: {
                    text: 'Months'
                },
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Total cost of instance'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: seriesDataList
        }
        return config
    }

    render() {
        return <ReactHighcharts config={this.graphConfig()}/>
    }


}