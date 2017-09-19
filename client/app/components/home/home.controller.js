import Singleton from '../../models/Singleton';

class HomeController {

    constructor($scope, $http, $q) {
        //console.log("HomeController");
        this.name = "Deneme";

        this.$scope = $scope;
        this.$http = $http;
        this.$q = $q;

        var orders = new DevExpress.data.CustomStore({
            load: function(loadOptions) {
                var parameters = {};

                if (loadOptions.sort) {
                    parameters.orderby = loadOptions.sort[0].selector;
                    if (loadOptions.sort[0].desc)
                        parameters.orderby += " desc";
                }

                parameters.skip = loadOptions.skip || 0;
                parameters.take = loadOptions.take || 12;

                var config = {
                    params: parameters
                };


                return $http.get("https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems", config)
                    .then((response) => {

                        var itemList = [];
                        for (var index = 0; index < response.data.items.length; index++) {
                            var item = new Singleton(response.data.items[index]);
                            itemList.push(item);
                        }

                        return {
                            data: response.data.items,
                            totalCount: response.data.totalCount
                        };
                    }, function(response) {
                        return $q.reject("Data Loading Error", response);
                    });
            }
        });

        $scope.dataGridOptions = {
            dataSource: {
                store: orders
            },
            remoteOperations: {
                sorting: true,
                paging: true
            },
            paging: {
                pageSize: 12
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [8, 12, 20]
            },
            columns: [
                "OrderNumber", "OrderDate", "StoreCity", "StoreState", "Employee", {
                    dataField: "SaleAmount",
                    format: "currency"
                }
            ]
        };

    }

}

HomeController.$inject = ['$scope', '$http', '$q'];

export default HomeController;