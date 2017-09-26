import errorComponent from './error.component';

let errorModule = angular.module('error', [
  'ui.router'
])


.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('error', {
            url: '/',
            component: 'error',
            resolve: {
                //lazyLoad: function($q, $ocLazyLoad) {
                //    return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                //}
            }
        });

})
.component('error', errorComponent)
.name;

export default errorModule;
