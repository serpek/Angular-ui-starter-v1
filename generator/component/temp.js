import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  'ui.router'
])


.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('<%= name %>', {
            url: '/',
            component: '<%= name %>',
            resolve: {
                //lazyLoad: function($q, $ocLazyLoad) {
                //    return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                //}
            }
        });

})
.component('<%= name %>', <%= name %>Component)
.name;

export default <%= name %>Module;
