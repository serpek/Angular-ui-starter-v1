/*@ngInject*/

class TargetActualizationGraphicController {
  
  constructor($scope, $http) {
    this.name = 'target-actualization-graphic';
    this.$scope = $scope;
    this.$http = $http;
  }

}

TargetActualizationGraphicController.$inject = ['$scope', '$http'];

export default TargetActualizationGraphicController;
