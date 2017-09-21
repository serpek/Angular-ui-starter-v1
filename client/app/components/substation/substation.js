import substationComponent from './substation.component';

let substationModule = angular.module('substation', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('substation', {
                url: '/substation',
                component: 'substation',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('substation', substationComponent)
    .name;

export default substationModule;