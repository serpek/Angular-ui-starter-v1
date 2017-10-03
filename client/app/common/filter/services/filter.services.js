'use strict';

class FilterService {
    constructor($window, $scope) {
        this.name = 'Filter Service';
        this.$scope = $scope;
        this.$scope.data = {};
    }

    subscribe(fn) {
        this.$scope.$watch(() => {
            return this.data;
        }, fn, true);
    }

    setData(d) {
        this.$scope.data = d;
        return this.$scope.data;
    }

    getData() {
        return this.$scope.data;
    }
}

FilterService.$inject = ['$window', '$rootScope'];
export default FilterService;