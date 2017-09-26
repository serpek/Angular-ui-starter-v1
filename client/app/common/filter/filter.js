import filterComponent from './filter.component';

let filterModule = angular.module('filter', [])
.component('filter', filterComponent)
.name;

export default filterModule;
