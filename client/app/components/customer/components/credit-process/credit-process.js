import creditProcessComponent from './credit-process.component';

let creditProcessModule = angular.module('creditProcess', [])
.component('creditProcess', creditProcessComponent)
.name;

export default creditProcessModule;