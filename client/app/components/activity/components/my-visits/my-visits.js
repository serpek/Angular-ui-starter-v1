import myVisitsComponent from './my-visits.component';

let myVisitsModule = angular.module('myVisits', [])
.component('myVisits', myVisitsComponent)
.name;

export default myVisitsModule;