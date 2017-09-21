import targetComponent from './target.component';

let targetModule = angular.module('target', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";


        $stateProvider
            .state('target', {
                url: '/target',
                component: 'target',
                resolve: {
                    // lazyLoad: function($q, $ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });
    })
    .component('target', targetComponent)
    .name;

export default targetModule;