import newCustomerAcquisitionComponent from './new-customer-acquisition.component';

let newCustomerAcquisitionModule = angular.module('newCustomerAcquisition', [])
.component('newCustomerAcquisition', newCustomerAcquisitionComponent)
.name;

export default newCustomerAcquisitionModule;