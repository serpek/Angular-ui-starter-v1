import SalableEquipment from './salable-equipment/salable-equipment';
import TargetCrmSummaryTable from './target-crm-summary-table/target-crm-summary-table';
import TargetCrmTargetCustomer from './target-crm-target-customer/target-crm-target-customer';
import TargetCrmBranchNegative from './target-crm-branch-negative/target-crm-branch-negative';
import TargetCrmOffered from './target-crm-offered/target-crm-offered';
import TargetCrmVisit from './target-crm-visit/target-crm-visit';
import UpcomingCustomerInfo from './upcoming-customer-info/upcoming-customer-info';

let salesComponentsModule = angular.module('app.salesComponents', [
    SalableEquipment,
    TargetCrmSummaryTable,
    TargetCrmTargetCustomer,
    TargetCrmBranchNegative,
    TargetCrmOffered,
    TargetCrmVisit,
    UpcomingCustomerInfo
])
.name;

export default salesComponentsModule;