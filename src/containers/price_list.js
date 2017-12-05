import React, {Component} from "react";
import {connect} from "react-redux";
import PriceItem from '../components/price_item';

export class PriceList extends Component {
    renderPriceList(priceData) {

        if(priceData.pricePerUnit === 0) {
            return
        }

        return (
            <PriceItem
                instanceType={priceData.instanceType}
                region={priceData.region}
                termType={priceData.termType}
                leaseContractLength={priceData.leaseContractLength}
                purchaseOption={priceData.purchaseOption}
                offeringClass={priceData.offeringClass}
                pricePerUnit={priceData.pricePerUnit}/>
        );
    }

    render() {
        return (
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>Instance Name</th>
                    <th>Region</th>
                    <th>Term</th>
                    <th>Lease Length</th>
                    <th>Purchase Option</th>
                    <th>Offering Class</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.props.price.map(pricingData => pricingData.map(this.renderPriceList))}
                </tbody>
            </table>
        );
    }
}

// state mapping
function mapStateToProps({price}) {
    return {price}; // { price: state.price }
}

export default connect(mapStateToProps)(PriceList);