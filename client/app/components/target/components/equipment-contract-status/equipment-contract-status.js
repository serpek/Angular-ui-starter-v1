import equipmentContractStatusComponent from './equipment-contract-status.component';

let equipmentContractStatusModule = angular.module('equipmentContractStatus', [])
.component('equipmentContractStatus', equipmentContractStatusComponent)
.name;

export default equipmentContractStatusModule;