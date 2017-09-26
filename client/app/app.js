import "./assets/css/bundle.scss";

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import httpInterceptorFactory from './interceptor';
import AuthService from './app.auth';
import ConfigService from './app.config';
import LoginService from './app.login';
import PermissionService from './app.permission';

angular.module('app', [
        'ngSanitize',
        'ui.router',
        'ui.router.state.events',
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
    .factory('httpInterceptor', httpInterceptorFactory)
    .service('AuthService', AuthService)
    .service('LoginService', LoginService)
    .service('PermissionService', PermissionService)
    .value('ConfigService', ConfigService)
    .config(($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $httpProvider.interceptors.push('httpInterceptor');
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(function($timeout, $rootScope, $location, blockUI, AuthService) {
        console.log("App => run");

        // $rootScope.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
        //     console.log("stateChangeStart => ", e, newUrl, oldUrl);
        // });

        // $rootScope.$on('$stateChangeSuccess', (e, newUrl, oldUrl) => {
        //     console.log("stateChangeSuccess => ", e, newUrl, oldUrl);
        // });

        // $rootScope.$on('$stateChangeError', (e, newUrl, oldUrl) => {
        //     console.log("stateChangeError => ", e, newUrl, oldUrl);
        // });

        var token = $location.search().token;

        if (!AuthService.isAuthenticated()) {
            $location.url(`/login?token=${token}`);
        }
        // Use a root scope flag to access everywhere in your app
        // $rootScope.isLoading = true;
        // Block the user interface
        // blockUI.start();

        // simulate long page loading
        // $timeout(function() {

        //     // turn "off" the flag
        //     $rootScope.isLoading = false;
        //     // Unblock the user interface
        //     blockUI.stop();

        // }, 3000);

    })
    .component('app', AppComponent);