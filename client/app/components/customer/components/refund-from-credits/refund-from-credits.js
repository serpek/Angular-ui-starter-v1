import refundFromCreditsComponent from './refund-from-credits.component';

let refundFromCreditsModule = angular.module('refundFromCredits', [])
.component('refundFromCredits', refundFromCreditsComponent)
.name;

export default refundFromCreditsModule;