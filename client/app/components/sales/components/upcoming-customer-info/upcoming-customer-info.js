import upcomingCustomerInfoComponent from './upcoming-customer-info.component';

let upcomingCustomerInfoModule = angular.module('upcomingCustomerInfo', [])
.component('upcomingCustomerInfo', upcomingCustomerInfoComponent)
.name;

export default upcomingCustomerInfoModule;