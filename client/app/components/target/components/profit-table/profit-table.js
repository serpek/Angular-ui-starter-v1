import profitTableComponent from './profit-table.component';

let profitTableModule = angular.module('profitTable', [])
.component('profitTable', profitTableComponent)
.name;

export default profitTableModule;