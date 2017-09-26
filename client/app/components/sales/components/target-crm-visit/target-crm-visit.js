import targetCrmVisitComponent from './target-crm-visit.component';

let targetCrmVisitModule = angular.module('targetCrmVisit', [])
.component('targetCrmVisit', targetCrmVisitComponent)
.name;

export default targetCrmVisitModule;