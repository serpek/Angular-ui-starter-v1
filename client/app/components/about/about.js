import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
    'ui.router'
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'about'
        });
})

.component('about', aboutComponent)

.name;

export default aboutModule;