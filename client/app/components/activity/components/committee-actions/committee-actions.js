import committeeActionsComponent from './committee-actions.component';

let committeeActionsModule = angular.module('committeeActions', [])
.component('committeeActions', committeeActionsComponent)
.name;

export default committeeActionsModule;