import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPrice} from "../actions/index";
import RegionSelect from "../components/region_select";
import LeaseContractLengthSelect from '../components/lease_contract_length_select';
import OfferingClassSelect from '../components/offering_class_select';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            region: '',
            offeringClass: '',
            leaseContractLength: ''
        };

        this.onTermChange = this.onTermChange.bind(this);
        this.onRegionSelect = this.onRegionSelect.bind(this);
        this.onLeaseContractLengthSelect = this.onLeaseContractLengthSelect.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onOfferingClassSelect = this.onOfferingClassSelect.bind(this);
    }

    onTermChange(event) {
        this.setState({term: event.target.value})
    }

    onRegionSelect(event) {
        this.setState({region: event.target.value})
    }

    onOfferingClassSelect(event) {
        this.setState({offeringClass: event.target.value})
    }

    onLeaseContractLengthSelect(event) {
        this.setState({leaseContractLength: event.target.value})
    }

    // search pricing-service
    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchPrice(
            this.state.term,
            this.state.region,
            this.state.leaseContractLength,
            this.state.offeringClass
        );
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <div className="col-md-12">
                        <div className="col-md-4"><RegionSelect selected={this.onRegionSelect}/></div>
                        <div className="col-md-4"><LeaseContractLengthSelect selected={this.onLeaseContractLengthSelect}/></div>
                        <div className="col-md-4"><OfferingClassSelect selected={this.onOfferingClassSelect}/></div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-10">
                            <input
                                placeholder="instance type"
                                className="form-control"
                                value={this.state.term}
                                onChange={this.onTermChange}/>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPrice}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)