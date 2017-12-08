import React, {Component} from "react";
import {connect} from "react-redux";
import CostChart from "../components/cost_chart";

export class ChartContainer extends Component {

    getOnDemandPrice(months) {
        var pricePerHour = 0.0;
        this.props.price.HOURLY_KEY.map(priceData => {
            if (priceData.termType.toLowerCase() === 'OnDemand'.toLowerCase()) {
                pricePerHour = priceData.pricePerUnit;
            }
        });

        var pricePerDay = pricePerHour * 24;
        var priceperMonth = pricePerDay * 30;


        var result = [];
        for (var i = 0; i < months; i++) {
            result.push(priceperMonth * i);
        }
        return result;
    }

    getReservedPrice(months, purchaseOption) {
        var pricePerHour = 0.0;

        this.props.price.HOURLY_KEY.map(priceData => {
            if (
                (priceData.termType.toLowerCase() === 'Reserved'.toLowerCase())
                && (priceData.purchaseOption.toLowerCase() === purchaseOption.toLowerCase())
            ) {
                pricePerHour = priceData.pricePerUnit;
            }
        });

        var pricePerDay = pricePerHour * 24;
        var priceperMonth = pricePerDay * 30;

        var result = [];
        for (var i = 0; i < months; i++) {
            result.push(priceperMonth * i);
        }
        return result;
    }

    getAllUpfrontPrices(months) {
        const price = this.props.price.UPFRONT_KEY.data.result[0].pricePerUnit;

        var result = [];
        for (var i = 0; i < months; i++) {
            result.push(price);
        }
        return result;
    }

    render() {
        if (this.props.price != '') {
            const instanceType = this.props.price.HOURLY_KEY[0].instanceType;
            const leaseContractLength = this.props.price.HOURLY_KEY[0].leaseContractLength;
            var months = leaseContractLength == '1yr' ? 12 : 36; // 1yr or 3yr RI
            console.log('months: ' + months);

            const onDemandPrice = this.getOnDemandPrice(months);
            const partialUpfront = this.getReservedPrice(months, 'Partial Upfront');
            const noUpfrontPrice = this.getReservedPrice(months, 'No Upfront');

            const allUpfrontCost = this.getAllUpfrontPrices(months);

            return (
                <div className="col-md-12">
                    <CostChart
                        instanceType={instanceType}
                        onDemandCost={onDemandPrice}
                        oneYearRiCost={partialUpfront}
                        twoYearRiCost={noUpfrontPrice}
                        leaseContractLength={leaseContractLength}
                        allUpfrontCost={allUpfrontCost}/>
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