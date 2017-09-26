import procurementProcessComponent from './procurement-process.component';

let procurementProcessModule = angular.module('procurementProcess', [])
.component('procurementProcess', procurementProcessComponent)
.name;

export default procurementProcessModule;