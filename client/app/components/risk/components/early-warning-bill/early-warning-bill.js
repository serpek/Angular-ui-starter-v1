import earlyWarningBillComponent from './early-warning-bill.component';

let earlyWarningBillModule = angular.module('earlyWarningBill', [])
.component('earlyWarningBill', earlyWarningBillComponent)
.name;

export default earlyWarningBillModule;