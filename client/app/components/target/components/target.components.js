import TargetActualization from './target-actualization/target-actualization';
import TargetActualizationSeller from './target-actualization-seller/target-actualization-seller';
import EquipmentContractStatus from './equipment-contract-status/equipment-contract-status';
import MonthlyEquipmentSellStatus from './monthly-equipment-sell-status/monthly-equipment-sell-status';
import ProfitTable from './profit-table/profit-table';
import Penetration from './penetration/penetration';
import NonTradedBranches from './non-traded-branches/non-traded-branches';
import BusinessModel from './business-model/business-model';

let targetComponentsModule = angular.module('app.targetComponents', [
    TargetActualization,
    TargetActualizationSeller,
    EquipmentContractStatus,
    MonthlyEquipmentSellStatus,
    ProfitTable,
    Penetration,
    NonTradedBranches,
    BusinessModel
])
.name;

export default targetComponentsModule;