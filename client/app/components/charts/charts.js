import chartsComponent from './charts.component';

let chartsModule = angular.module('charts', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('charts', {
                url: '/charts',
                component: 'charts',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('charts', chartsComponent)
    .name;

export default chartsModule;