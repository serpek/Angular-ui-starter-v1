import salesComponent from './sales.component';

let salesModule = angular.module('sales', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('sales', {
                url: '/sales',
                component: 'sales',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('sales', salesComponent)
    .name;

export default salesModule;