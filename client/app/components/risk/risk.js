import riskComponent from './risk.component';

let riskModule = angular.module('risk', [
        'ui.router'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        // "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('risk', {
                url: '/risk',
                component: 'risk',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('risk', riskComponent)
    .name;

export default riskModule;