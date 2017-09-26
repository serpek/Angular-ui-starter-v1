import pricingComponent from './pricing.component';

let pricingModule = angular.module('pricing', [])
.component('pricing', pricingComponent)
.name;

export default pricingModule;