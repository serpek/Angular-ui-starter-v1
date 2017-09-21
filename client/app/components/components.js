import Dashboard from './dashboard/dashboard';
import Login from './login/login';
import About from './about/about';
import Activity from './activity/activity';
import Target from './target/target';
import Sales from './sales/sales';
import Customer from './customer/customer';
import Risk from './risk/risk';
import Substation from './substation/substation';

let componentModule = angular.module('app.components', [
        Dashboard,
        Login,
        About,
        Activity,
        Target,
        Sales,
        Customer,
        Risk,
        Substation
    ])
    .name;

export default componentModule;