import NplList from './npl-list/npl-list';
import ExecutiveProceedingCustomers from './executive-proceeding-customers/executive-proceeding-customers';
import CloseMonitoring from './close-monitoring/close-monitoring';
import Preview from './preview/preview';
import StartExecutiveProceeding from './start-executive-proceeding/start-executive-proceeding';
import StartWarningCustomers from './start-warning-customers/start-warning-customers';
import PossibleNplCustomers from './possible-npl-customers/possible-npl-customers';
import EarlyWarningCheque from './early-warning-cheque/early-warning-cheque';
import EarlyWarningBill from './early-warning-bill/early-warning-bill';
import TsgNegativeInformation from './tsg-negative-information/tsg-negative-information';
import BankStatusChange from './bank-status-change/bank-status-change';

let riskComponentsModule = angular.module('app.riskComponents', [
    NplList,
    ExecutiveProceedingCustomers,
    CloseMonitoring,
    Preview,
    StartExecutiveProceeding,
    StartWarningCustomers,
    PossibleNplCustomers,
    EarlyWarningCheque,
    EarlyWarningBill,
    TsgNegativeInformation,
    BankStatusChange    
])
.name;

export default riskComponentsModule;