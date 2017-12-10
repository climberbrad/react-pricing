import axios from "axios";

// const host='https://production-pricing.cldy.zone';
const host='http://localhost:9090';

const RI_ROOT_URL = host +'/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs&termType=Reserved';
const ON_DEMAND_ROOT_URL = host +'/v1/ec2?operatingSystem=linux&tenancy=shared&unit=hrs&termType=onDemand';
const UPFRONT_ROOT_URL = host +'/v1/ec2?operatingSystem=linux&termType=Reserved&tenancy=shared&unit=Quantity';

export const FETCH_PRICE = 'FETCH_PRICE';

function addAccountToUrl(url, accountIdentifier) {
    var position = url.indexOf('?');
    return url.substr(0, position) + '/' + accountIdentifier + url.substr(position);
}

export function fetchPrice(searchTerm, region, leaseContractLength, offeringClass) {

    const accountIdentifier = location.search.split('=')[1];

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

    if (accountIdentifier) {
        onDemandURL = addAccountToUrl(onDemandURL, accountIdentifier);
        riURL = addAccountToUrl(riURL, accountIdentifier);
        allUpfrontURL = addAccountToUrl(allUpfrontURL, accountIdentifier);
        partialUpfrontURL = addAccountToUrl(partialUpfrontURL, accountIdentifier);
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