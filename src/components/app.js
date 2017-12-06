import React, {Component} from "react";
import SearchBar from "../containers/search_bar";
import PriceList from "../containers/price_list";
import ChartContainer from '../containers/chart_container';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="banner col-md-12">
                    <h1>Pricing</h1>
                </div>

                <SearchBar/>
                <PriceList/>
                <ChartContainer/>
            </div>
        );
    }
}