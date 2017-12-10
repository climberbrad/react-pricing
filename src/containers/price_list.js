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
                           pricePerUnit={priceData.pricePerUnit}
                           memory={priceData.memory}
                           networkPerformance={priceData.networkPerformance}
                           vcpu={priceData.vcpu}
                           storage={priceData.storage}
        />);
    }

    render() {
        return (
            <div className="col-md-12 price-list-container">
                {this.props.price.HOURLY_KEY &&
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th className="table-data">Instance</th>
                        <th className="table-data">Region</th>
                        <th className="table-data">Term</th>
                        <th className="table-data">Lease</th>
                        <th className="table-data">Purchase Option</th>
                        <th className="table-data">Offering Class</th>
                        <th className="table-data">Price</th>
                        <th className="table-data">Memory</th>
                        <th className="table-data">Network</th>
                        <th className="table-data">vcpu</th>
                        <th className="table-data">Storage</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.price.HOURLY_KEY.map(this.renderPriceList)}
                    </tbody>
                </table>
                }
            </div>
        );
    }
}

// state mapping
function mapStateToProps({price}) {
    return {price}; // { price: state.price }
}

export default connect(mapStateToProps)(PriceList);