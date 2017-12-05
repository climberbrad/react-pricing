import axios from "axios";

const ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?region=us-east-1&operatingSystem=linux&termType=Reserved&tenancy=shared&unit=hrs&instanceType=';

export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(searchTerm) {
    const url = `${ROOT_URL}${searchTerm}`
    const request = axios.get(url);

    //  npm install --save axios
    return {
        type: FETCH_PRICE,
        payload: request
    };
}