import ongoingCampaignsComponent from './ongoing-campaigns.component';

let ongoingCampaignsModule = angular.module('ongoingCampaigns', [])
.component('ongoingCampaigns', ongoingCampaignsComponent)
.name;

export default ongoingCampaignsModule;