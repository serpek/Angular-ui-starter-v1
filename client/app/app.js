import "./assets/css/bundle.scss";

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import httpInterceptor from './interceptor';
import AuthService from './app.auth';
import ConfigService from './app.config';
import LoginService from './app.login';

angular.module('app', [
        'ngSanitize',
        'ui.router',
        'ng-fusioncharts',
        'dx',
        'blockUI',
        'oc.lazyLoad',
        Common,
        Components
    ])
    .constant("CONFIG", {
        "contextRoot": "/",
        "softwareCode": "APPSTARTER",
        "idleTime": 14 * 60
    })
    .service('AuthService', AuthService)
    .service('LoginService', LoginService)
    .value('ConfigService', ConfigService)
    .run(function($timeout, $rootScope, blockUI, LoginService) {
        console.log("App => run");

        LoginService.login("a", "b");

        // Use a root scope flag to access everywhere in your app
        $rootScope.isLoading = true;
        // Block the user interface
        blockUI.start();

        // simulate long page loading
        $timeout(function() {

            // turn "off" the flag
            $rootScope.isLoading = false;
            // Unblock the user interface
            blockUI.stop();

        }, 3000);

    })
    .config(($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) => {
        console.log("App => config");
        // "ngInject";
        $httpProvider.interceptors.push(httpInterceptor);
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);