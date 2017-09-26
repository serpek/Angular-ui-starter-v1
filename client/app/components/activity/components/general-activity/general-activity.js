import generalActivityComponent from './general-activity.component';

let generalActivityModule = angular.module('generalActivity', [])
.component('generalActivity', generalActivityComponent)
.name;

export default generalActivityModule;
