import React, {Component} from "react";
import {connect} from "react-redux";
import PriceItem from "../components/price_item";

export class PriceList extends Component {
    renderPriceList(priceData) {
        if (priceData.pricePerUnit === 0) {
            return
        }

        return (<PriceItem key={priceData.pricePerUnit}
                           instanceType={priceData.instanceType}
                           region={priceData.region}
                           termType={priceData.termType}
                           leaseContractLength={priceData.leaseContractLength}
                           purchaseOption={priceData.purchaseOption}
                           offeringClass={priceData.offeringClass}
                           pricePerUnit={priceData.pricePerUnit}/>);
    }

    render() {
        return (
            <div className="col-md-12">
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Instance Name</th>
                        <th>Region</th>
                        <th>Term</th>
                        <th>Lease Length</th>
                        <th>Purchase Option</th>
                        <th>Offering Class</th>
                        <th>Price per hour</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.price.HOURLY_KEY && this.props.price.HOURLY_KEY.map(this.renderPriceList)}
                    </tbody>
                </table>
            </div>
        );
    }
}

// state mapping
function mapStateToProps({price}) {
    return {price}; // { price: state.price }
}

export default connect(mapStateToProps)(PriceList);