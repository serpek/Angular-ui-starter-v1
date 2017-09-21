import dashboardComponent from './dashboard.component';

// let hash = '?' + Date.now();

let dashboardModule = angular.module('dashboard', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('dashboard', {
                url: '/',
                component: 'dashboard',
                resolve: {
                    auth: () => {
                        //console.log("e: ", dashboardComponent);
                        return false;
                    }

                    // lazyLoad: function($q,$ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });

    })
    .component('dashboard', dashboardComponent)
    .name;

export default dashboardModule;

/*.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    // "ngInject";

    $urlRouterProvider.otherwise('/');

    $ocLazyLoadProvider.config({
        modules: [{
            name: 'icons_and_fonts',
            files: [
                'components/font-awesome/css/font-awesome.min.css',
                'components/weather-icons/css/weather-icons.min.css'
            ]
        }],
        debug: true,
        events: true
    })
}])*/