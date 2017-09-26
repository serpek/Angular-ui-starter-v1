import TargetActualizationGraphic from './target-actualization-graphic/target-actualization-graphic';
import RiskManagement from './risk-management/risk-management';
import ActivityGraphic from './activity-graphic/activity-graphic';
import CustomerPortfolio from './customer-portfolio/customer-portfolio';
import MobileaseUseRatio from './mobilease-use-ratio/mobilease-use-ratio';

let dashboardComponentsModule = angular.module('app.dashboardComponents', [
        TargetActualizationGraphic,
        RiskManagement,
        ActivityGraphic,
        CustomerPortfolio,
        MobileaseUseRatio
    ])
    .name;

export default dashboardComponentsModule;