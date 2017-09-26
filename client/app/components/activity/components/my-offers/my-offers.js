import myOffersComponent from './my-offers.component';

let myOffersModule = angular.module('myOffers', [])
.component('myOffers', myOffersComponent)
.name;

export default myOffersModule;