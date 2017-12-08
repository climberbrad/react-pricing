import axios from "axios";

const RI_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs&termType=Reserved';
const ON_DEMAND_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs&termType=onDemand';
const UPFRONT_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&termType=Reserved&tenancy=shared&unit=Quantity';

export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(searchTerm, region, leaseContractLength, offeringClass) {
    var riURL = `${RI_ROOT_URL}&instanceType=${searchTerm}`
    var onDemandURL = `${ON_DEMAND_ROOT_URL}&instanceType=${searchTerm}`
    var allUpfrontURL = `${UPFRONT_ROOT_URL}&instanceType=${searchTerm}&purchaseOption=All_Upfront`
    var partialUpfrontURL = `${UPFRONT_ROOT_URL}&instanceType=${searchTerm}&purchaseOption=partial_upfront`

    if (region != '') {
        onDemandURL = `${onDemandURL}&region=${region}`

        riURL = `${riURL}&region=${region}`
        allUpfrontURL = `${allUpfrontURL}&region=${region}`
        partialUpfrontURL = `${partialUpfrontURL}&region=${region}`
    }


    if (leaseContractLength != '') {
        riURL = `${riURL}&leaseContractLength=${leaseContractLength}`
        allUpfrontURL = `${allUpfrontURL}&leaseContractLength=${leaseContractLength}`
        partialUpfrontURL = `${partialUpfrontURL}&leaseContractLength=${leaseContractLength}`
    }

    if (offeringClass != '') {
        riURL = `${riURL}&offeringClass=${offeringClass}`
        allUpfrontURL = `${allUpfrontURL}&offeringClass=${offeringClass}`
        partialUpfrontURL = `${partialUpfrontURL}&offeringClass=${offeringClass}`
    }

    const request = axios.all([
        axios.get(riURL),
        axios.get(onDemandURL),
        axios.get(allUpfrontURL),
        axios.get(partialUpfrontURL)
    ]);

    //  npm install --save axios
    return {
        type: FETCH_PRICE,
        payload: request
    };
}