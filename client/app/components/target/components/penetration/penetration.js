import penetrationComponent from './penetration.component';

let penetrationModule = angular.module('penetration', [])
.component('penetration', penetrationComponent)
.name;

export default penetrationModule;