import bankStatusChangeComponent from './bank-status-change.component';

let bankStatusChangeModule = angular.module('bankStatusChange', [])
.component('bankStatusChange', bankStatusChangeComponent)
.name;

export default bankStatusChangeModule;