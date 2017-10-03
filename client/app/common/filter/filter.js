import filterComponent from './filter.component';
import FilterService from './services/filter.services';

let filterModule = angular.module('filter', [])
    .component('filter', filterComponent)
    .service('FilterService', FilterService)
    .name;

export default filterModule;