import customerComponent from './customer.component';

let customerModule = angular.module('customer', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('customer', {
                url: '/customer',
                component: 'customer',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('customer', customerComponent)
    .name;

export default customerModule;