import React, {Component} from "react";
import {connect} from "react-redux";
import CostChart from "../components/cost_chart";
import TotalCost from "../components/total_cost";

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

    getReservedPrice(months, purchaseOption, upfrontCost) {

        // get pricePerHour for this purchaseOption
        var pricePerHour = 0.0;
        this.props.price.HOURLY_KEY.map(priceData => {
            if (
                (priceData.termType.toLowerCase() === 'Reserved'.toLowerCase())
                && (priceData.purchaseOption.toLowerCase() === purchaseOption.toLowerCase())
            ) {
                pricePerHour = priceData.pricePerUnit;
            }
        });

        var pricePerMonth = pricePerHour * 750; // aprox 750hr/mo :)
        var result = [];
        for (var i = 0; i < months; i++) {
            if (i === 0) {
                result.push(upfrontCost)
            } else {
                result.push(upfrontCost + (pricePerMonth * i));
            }
        }
        return result;
    }

    getAllUpfrontPrices(months) {
        const price = this.props.price.UPFRONT_KEY[0].pricePerUnit; // all upfront is first item in array
        var result = [];
        for (var i = 0; i < months; i++) {
            result.push(price);
        }
        return result;
    }

    render() {
        if (this.props.price != '') {
            const partialUpfrontCost = this.props.price.UPFRONT_KEY[1].pricePerUnit; // partial is 2nd item in array
            const instanceType = this.props.price.HOURLY_KEY[0].instanceType;
            const leaseContractLength = this.props.price.HOURLY_KEY[0].leaseContractLength;
            var months = leaseContractLength == '1yr' ? 12 : 36; // 1yr or 3yr RI

            const onDemandPrice = this.getOnDemandPrice(months);
            const partialUpfront = this.getReservedPrice(months, 'Partial Upfront', partialUpfrontCost);
            const noUpfrontPrice = this.getReservedPrice(months, 'No Upfront', 0);
            const allUpfrontCost = this.getAllUpfrontPrices(months);

            return (
                <div className="col-md-12">
                    <div className="col-md-8">
                        <CostChart
                            instanceType={instanceType}
                            onDemandCost={onDemandPrice}
                            partialUpfrontPrice={partialUpfront}
                            noUpfrontPrice={noUpfrontPrice}
                            leaseContractLength={leaseContractLength}
                            allUpfrontCost={allUpfrontCost}/>
                    </div>
                    <div className="col-md-4">
                        <TotalCost
                            onDemand={onDemandPrice[onDemandPrice.length-1].toFixed(2)}
                            partialUpfront={partialUpfront[partialUpfront.length-1].toFixed(2)}
                            noUpfront={noUpfrontPrice[noUpfrontPrice.length-1].toFixed(2)}
                            allUpfront={allUpfrontCost[allUpfrontCost.length-1].toFixed(2)} />
                    </div>

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