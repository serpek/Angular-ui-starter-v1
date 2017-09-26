import CreditProcess from './credit-process/credit-process';
import RefundFromCredits from './refund-from-credits/refund-from-credits';
import ContractualProcess from './contractual-process/contractual-process';
import ProcurementProcess from './procurement-process/procurement-process';
import GeneralStatusTable from './general-status-table/general-status-table';
import BrandBasedReport from './brand-based-report/brand-based-report';

let customerComponentsModule = angular.module('app.customerComponents', [
    CreditProcess,
    RefundFromCredits,
    ContractualProcess,
    ProcurementProcess,
    GeneralStatusTable,
    BrandBasedReport
])
.name;

export default customerComponentsModule;