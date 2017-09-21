import loginComponent from './login.component';

let loginModule = angular.module('login', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('login', {
                url: '/login',
                component: 'login',
                resolve: {
                    //lazyLoad: function($q, $ocLazyLoad) {
                    //    return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    //}
                }
            });

    })
    .component('login', loginComponent)
    .name;

export default loginModule;