class FilterController {
  constructor($http, $scope, PermissionService) {
    this.name = 'filter';
    this.permission = PermissionService.getPermission();
    console.log("#### filter options => ", $scope.$ctrl.options);

    //console.log(this.permissionService.setPermission());
  }


}

FilterController.$inject = ['$http', '$scope', 'PermissionService'];

export default FilterController;
