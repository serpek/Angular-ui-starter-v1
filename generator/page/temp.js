import <%= camelCaseName %>Component from './<%= name %>.component';

let <%= camelCaseName %>Module = angular.module('<%= camelCaseName %>', [
  'ui.router'
])
.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('<%= name %>', {
            url: '/<%= name %>',
            component: '<%= camelCaseName %>',
            resolve: {
                //lazyLoad: function($q, $ocLazyLoad) {
                //    return $ocLazyLoad.load(['app/assets/js/fusioncharts/fusioncharts.js']);
                //}
            }
        });

}).component('<%= camelCaseName %>', <%= camelCaseName %>Component)
.name;

export default <%= camelCaseName %>Module;