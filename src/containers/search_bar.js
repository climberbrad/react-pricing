import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPrice} from "../actions/index";
import RegionSelect from "../components/region_select";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            region: '',
            termType: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onRegionSelect = this.onRegionSelect.bind(this);
        this.onTermTypeSelectChange = this.onTermTypeSelectChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onRegionSelect(event) {
        this.setState({region: event.target.value})
    }

    onTermTypeSelectChange(event) {
        this.setState({termType: event.target.value})
    }

    // search pricing-service
    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchPrice(
            this.state.term,
            this.state.region,
            this.state.termType
        );
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <RegionSelect selected={this.onRegionSelect} />
                        </div>
                        <div className="col-md-4">
                            <select value={this.state.termType}
                                    onChange={this.onTermTypeSelectChange}
                                    className="drop-down">
                                <option hidden>Term</option>
                                <option>OnDemand</option>
                                <option>Reserved</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="drop-down">
                                <option hidden>Offering</option>
                                <option>Standard</option>
                                <option>Convertible</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-10">
                            <input
                                placeholder="instance type"
                                className="form-control"
                                value={this.state.term}
                                onChange={this.onInputChange}/>
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