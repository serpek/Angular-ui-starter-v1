import GeneralActivity from './general-activity/general-activity';
import NewCustomerAcquisition from './new-customer-acquisition/new-customer-acquisition';
import Pricing from './pricing/pricing';
import BidsForRegions from './bids-for-regions/bids-for-regions';
import CommitteeActions from './committee-actions/committee-actions';
import MyOffers from './my-offers/my-offers';
import OngoingCampaigns from './ongoing-campaigns/ongoing-campaigns';
import MyVisits from './my-visits/my-visits';
import LoanCosts from './loan-costs/loan-costs';

let activityComponentsModule = angular.module('app.activityComponents', [
        GeneralActivity,
        NewCustomerAcquisition,
        Pricing, 
        BidsForRegions,
        CommitteeActions,
        MyOffers,
        OngoingCampaigns,
        MyVisits,
        LoanCosts
    ])
    .name;

export default activityComponentsModule;