import possibleNplCustomersComponent from './possible-npl-customers.component';

let possibleNplCustomersModule = angular.module('possibleNplCustomers', [])
.component('possibleNplCustomers', possibleNplCustomersComponent)
.name;

export default possibleNplCustomersModule;