import filterComponent from './filter.component';
import FilterService from './services/filter.services';
import FilterModel from './dto/filter.model';

let filterModule = angular.module('filter', [])
    .component('filter', filterComponent)
    .service('FilterService', FilterService)
    .value('FilterModel', FilterModel)
    .name;

export default filterModule;