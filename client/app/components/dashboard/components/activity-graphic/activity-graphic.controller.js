let self;

class ActivityGraphicController {
    constructor($scope, $rootScope, FilterService) {
        self = this;

        self.name = 'activity-graphic';
        self.$scope = $scope;
        self.FilterService = FilterService;

        // var filter = new FilterModel({ MT: "b", BM: "c" });
        // console.log("filter: ", filter);
        self.FilterService.subscribe(self.filter);
    }

    filter() {
        var a = self.FilterService.getData();
        console.log("asdsd ", a);
    }
}

ActivityGraphicController.$inject = ['$scope', '$rootScope', 'FilterService'];
export default ActivityGraphicController;