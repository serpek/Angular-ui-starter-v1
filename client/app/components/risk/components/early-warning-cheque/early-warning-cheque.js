import earlyWarningChequeComponent from './early-warning-cheque.component';

let earlyWarningChequeModule = angular.module('earlyWarningCheque', [])
.component('earlyWarningCheque', earlyWarningChequeComponent)
.name;

export default earlyWarningChequeModule;