import Singleton from '../../models/Singleton';

class DashboardController {

    constructor($scope, $http, $q, AuthService) {
        this.name = "Deneme";

        this.$scope = $scope;
        this.$http = $http;
        this.$q = $q;

        this.AuthService = AuthService;
        // let self;
        // self = this;

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
            columnHidingEnabled: true,
            editing: {
                allowAdding: true,
                allowUpdating: true,
                mode: "batch"
            },
            "export": {
                enabled: true,
                fileName: "Orders"
            },
            grouping: {
                contextMenuEnabled: true,
                expandMode: "rowClick"
            },
            groupPanel: {
                emptyPanelText: "Use the context menu of header columns to group data",
                visible: true
            },
            pager: {
                allowedPageSizes: [5, 8, 15, 30],
                showInfo: true,
                showNavigationButtons: true,
                showPageSizeSelector: true,
                visible: true
            },
            paging: {
                pageSize: 8
            },
            columnChooser: {
                enabled: true,
                mode: "select"
            },
            columns: [
                "OrderNumber", "OrderDate", "StoreCity", "StoreState", "Employee", {
                    dataField: "SaleAmount",
                    format: "currency"
                }
            ]
        };

        var chartDataSource = new DevExpress.data.DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems"
            },
            postProcess: function(results) {
                return results[0].DayItems;
            },
            expand: "DayItems",
            filter: ["Id", "=", 1]
        });


        this.chartOptions = {
            dataSource: chartDataSource,
            title: "Temperature in Barcelona, 2012",
            size: {
                height: 420
            },
            series: {
                argumentField: "Number",
                valueField: "Temperature",
                type: "spline"
            },
            legend: {
                visible: false
            },
            commonPaneSettings: {
                border: {
                    visible: true,
                    width: 2,
                    top: false,
                    right: false
                }
            },
            "export": {
                enabled: true
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function(arg) {
                    return {
                        text: arg.valueText + "&#176C"
                    };
                }
            },
            valueAxis: {
                valueType: "numeric",
                grid: {
                    opacity: 0.2
                },
                label: {
                    customizeText: function() {
                        return this.valueText + "&#176C";
                    }
                }
            },
            argumentAxis: {
                type: "discrete",
                grid: {
                    visible: true,
                    opacity: 0.5
                }
            }
        };

        this.selectBoxOptions = {
            width: 150,
            value: 1,
            items: [{
                id: 1,
                name: "January"
            }, {
                id: 2,
                name: "February"
            }, {
                id: 3,
                name: "March"
            }, {
                id: 4,
                name: "April"
            }, {
                id: 5,
                name: "May"
            }, {
                id: 6,
                name: "June"
            }, {
                id: 7,
                name: "July"
            }, {
                id: 8,
                name: "August"
            }, {
                id: 9,
                name: "September"
            }, {
                id: 10,
                name: "October"
            }, {
                id: 11,
                name: "November"
            }, {
                id: 12,
                name: "December"
            }],
            valueExpr: "id",
            displayExpr: "name",
            onValueChanged: function(e) {
                chartDataSource.filter(["Id", "=", e.value]);
                chartDataSource.load();
            }
        };
        console.log("getCredentials: =>  1", this.AuthService.getCredentials());
    }

    getCredential() {

        console.log("getCredentials: =>  2", this.AuthService.getCredentials());
    }
}

DashboardController.$inject = ['$scope', '$http', '$q', 'AuthService'];

export default DashboardController;