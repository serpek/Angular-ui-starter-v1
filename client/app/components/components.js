import Login from './login/login';

import Dashboard from './dashboard/dashboard';
import Activity from './activity/activity';
import Target from './target/target';
import Sales from './sales/sales';
import Customer from './customer/customer';
import Risk from './risk/risk';
import Substation from './substation/substation';


import DashboardComponents from './dashboard/components/dashboard.components';
import ActivityComponents from './activity/components/activity.components';
import TargetComponents from './target/components/target.components';
import SalesComponents from './sales/components/sales.components';
import CustomerComponents from './customer/components/customer.components';
import RiskComponents from './risk/components/risk.components';
import SubstationComponents from './risk/components/risk.components';


let componentModule = angular.module('app.components', [
        Login,
        Dashboard,
        Activity,
        Target,
        Sales,
        Customer,
        Risk,
        Substation,
        DashboardComponents,
        ActivityComponents,
        TargetComponents,
        SalesComponents,
        CustomerComponents,
        RiskComponents,
        SubstationComponents    
    ])
    .name;

export default componentModule;