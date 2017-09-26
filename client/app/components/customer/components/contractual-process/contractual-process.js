import contractualProcessComponent from './contractual-process.component';

let contractualProcessModule = angular.module('contractualProcess', [])
.component('contractualProcess', contractualProcessComponent)
.name;

export default contractualProcessModule;