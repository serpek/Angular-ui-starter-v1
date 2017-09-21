import activityComponent from './activity.component';

let activityModule = angular.module('activity', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('activity', {
                url: '/activity',
                component: 'activity',
                resolve: {
                    lazyLoad: function($q, $ocLazyLoad) {
                        return $ocLazyLoad.load(['/css/main.min.css']);
                    }
                }
            });

    })
    .component('activity', activityComponent)
    .name;

export default activityModule;