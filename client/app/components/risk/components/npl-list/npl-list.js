import nplListComponent from './npl-list.component';

let nplListModule = angular.module('nplList', [])
.component('nplList', nplListComponent)
.name;

export default nplListModule;