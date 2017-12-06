import React, {Component} from "react";
import ReactHighcharts from "react-highcharts";

export default class CostChart extends Component {
    constructor(props) {
        super(props);
    }

    graphConfig() {
        let seriesDataList = []
        seriesDataList.push({name: "On Demand", data: this.props.onDemandCost});
        seriesDataList.push({name: "No Upfront RI (1yr)", data: this.props.oneYearRiCost});
        seriesDataList.push({name: "Partial Upfront RI (1yr)", data: this.props.twoYearRiCost});

        let config = {
            chart: {
                type: 'line'
            },
            title: {
                text: this.props.instanceType
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'March', 'April', 'May']
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