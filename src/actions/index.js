import axios from "axios";

const ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs';

export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(searchTerm, region, termType) {
    var url = `${ROOT_URL}&instanceType=${searchTerm}`

    if (region != '') {
        url = `${url}&region=${region}`
    }

    if (termType != '') {
        url = `${url}&termType=${termType}`
    }

    const request = axios.get(url);
    //  npm install --save axios
    return {
        type: FETCH_PRICE,
        payload: request
    };
}