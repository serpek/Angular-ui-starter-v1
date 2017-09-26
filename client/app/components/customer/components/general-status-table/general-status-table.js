import generalStatusTableComponent from './general-status-table.component';

let generalStatusTableModule = angular.module('generalStatusTable', [])
.component('generalStatusTable', generalStatusTableComponent)
.name;

export default generalStatusTableModule;