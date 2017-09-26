import brandBasedReportComponent from './brand-based-report.component';

let brandBasedReportModule = angular.module('brandBasedReport', [])
.component('brandBasedReport', brandBasedReportComponent)
.name;

export default brandBasedReportModule;