import homeComponent from './home.component';

// let hash = '?' + Date.now();

let homeModule = angular.module('home', [
        'ui.router'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        // "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                component: 'home',
                resolve: {
                    // lazyLoad: function($q,$ocLazyLoad) {
                    //     return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                    // }
                }
            });

    })
    .component('home', homeComponent)
    .name;

export default homeModule;

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