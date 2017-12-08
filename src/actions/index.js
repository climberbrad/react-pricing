import axios from "axios";

const RI_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs';
const ON_DEMAND_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs&termType=onDemand'
const ALL_UPFRONT_ROOT_URL = 'https://production-pricing.cldy.zone/v1/ec2?instanceType=m4.large&region=us-east-1&operatingSystem=linux&termType=Reserved&tenancy=shared&offeringClass=standard&unit=Quantity&leaseContractLength=1yr&purchaseOption=All_Upfront'

export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(searchTerm, region, leaseContractLength, offeringClass) {
    var riURL = `${RI_ROOT_URL}&instanceType=${searchTerm}`
    var onDemandURL = `${ON_DEMAND_ROOT_URL}&instanceType=${searchTerm}`

    if (region != '') {
        riURL = `${riURL}&region=${region}`
        onDemandURL = `${onDemandURL}&region=${region}`
    }


    if (leaseContractLength != '') {
        riURL = `${riURL}&leaseContractLength=${leaseContractLength}`
    }

    if (offeringClass != '') {
        riURL = `${riURL}&offeringClass=${offeringClass}`
    }

    const request = axios.all([
        axios.get(riURL),
        axios.get(onDemandURL),
        axios.get(ALL_UPFRONT_ROOT_URL)
    ]);

    //  npm install --save axios
    return {
        type: FETCH_PRICE,
        payload: request
    };
}