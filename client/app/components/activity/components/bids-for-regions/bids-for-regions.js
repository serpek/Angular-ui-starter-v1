import bidsForRegionsComponent from './bids-for-regions.component';

let bidsForRegionsModule = angular.module('bidsForRegions', [])
.component('bidsForRegions', bidsForRegionsComponent)
.name;

export default bidsForRegionsModule;