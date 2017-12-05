import React, {Component} from "react";
import SearchBar from '../containers/search_bar';
import PriceList from '../containers/price_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <PriceList/>
            </div>
        );
    }
}
