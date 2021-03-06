import {FETCH_PRICE} from "../actions/index";

export const HOURLY_KEY = 'hourly';
export const UPFRONT_KEY = 'upfront';

export default function (state = [], action) {
    var hourlyPricing = [];
    var upfrontPricing = [];

    if (Array.isArray(action.payload)) {
        hourlyPricing = action.payload[0].data.result.concat(action.payload[1].data.result); // onDemand, Reserved
        upfrontPricing = action.payload[2].data.result.concat(action.payload[3].data.result); // all upfront, partial_upfront
    }

    const dataMap = {
        HOURLY_KEY: hourlyPricing,
        UPFRONT_KEY: upfrontPricing
    };

    switch (action.type) {
        case FETCH_PRICE:
            return dataMap
    }
    return state;
}