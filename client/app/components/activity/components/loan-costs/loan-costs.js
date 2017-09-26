import loanCostsComponent from './loan-costs.component';

let loanCostsModule = angular.module('loanCosts', [])
.component('loanCosts', loanCostsComponent)
.name;

export default loanCostsModule;