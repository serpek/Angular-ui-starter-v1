import riskManagementComponent from './risk-management.component';

let riskManagementModule = angular.module('riskManagement', [])
.component('riskManagement', riskManagementComponent)
.name;

export default riskManagementModule;
