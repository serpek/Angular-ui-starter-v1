import targetCrmSummaryTableComponent from './target-crm-summary-table.component';

let targetCrmSummaryTableModule = angular.module('targetCrmSummaryTable', [])
.component('targetCrmSummaryTable', targetCrmSummaryTableComponent)
.name;

export default targetCrmSummaryTableModule;