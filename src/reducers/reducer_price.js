import {FETCH_PRICE} from "../actions/index";

export default function (state = [], action) {

    // the action handler will make 2 REST calls (one for RI data and one for onDemand)
    var both = [];
    if (Array.isArray(action.payload)) {
        both = action.payload[0].data.result.concat(action.payload[1].data.result);
    }

    switch (action.type) {
        case FETCH_PRICE:
            return [both, state];
    }
    return state;
}