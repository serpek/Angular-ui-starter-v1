import startWarningCustomersComponent from './start-warning-customers.component';

let startWarningCustomersModule = angular.module('startWarningCustomers', [])
.component('startWarningCustomers', startWarningCustomersComponent)
.name;

export default startWarningCustomersModule;