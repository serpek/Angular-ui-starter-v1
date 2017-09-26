import businessModelComponent from './business-model.component';

let businessModelModule = angular.module('businessModel', [])
.component('businessModel', businessModelComponent)
.name;

export default businessModelModule;