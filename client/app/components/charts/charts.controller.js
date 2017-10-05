class ChartsController {

  constructor($scope) {
    this.name = 'Charts Page';
    this.$scope = $scope;

    this.chart1();
    this.chart2();
    this.chart3();
    this.chart4();
    this.chart5();

  }

  chart1() {

    let dataSource = [{
      state: "Illinois",
      year1998: 10.5,
      year2001: 72.5
      }, {
        state: "Indiana",
        year1998: 18.9,
        year2001: 22.7
      }, {
        state: "Michigan",
        year1998: 86.9,
        year2001: 22.7
      }, {
        state: "Ohio",
        year1998: 44.9,
        year2001: 21.7
      }, {
        state: "Wisconsin",
        year1998: 23.9,
        year2001: 29.7
      }];


    return this.$scope.chart1Options = {
      palette: ["#C9E0D6", "#0AB25E"],
      dataSource: dataSource,
      barWidth: 1,
      commonSeriesSettings: {
        argumentField: "state",
        type: "bar",
        hoverMode: "allArgumentPoints",
        selectionMode: "allArgumentPoints",
        label: {
          visible: true,
          format: {
            type: "fixedPoint",
            format: 'percent',
            precision: 1,
            percentPrecision: 1
          },
          verticalOffset: 40,
          customizeText: function () {
            return "%" + this.valueText;
          },
          font: {
            color: "#FFF",
            weight: 700,
            size: 13
          },
        }
      },
      commonAxisSettings: {
        label: {
          visible: true,
          font: {
            color: "#5B5855",
            weight: "700",
            size: 13
          }
        }
      },
      series: [{
          valueField: "year1998",
          name: "1998"
        },
        {
          valueField: "year2001",
          name: "2001"
        }
      ],
      legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        itemTextPosition: "right"
      },
      "export": {
        enabled: true
      },
      onPointClick: function (e) {
        e.target.select();
      }
    };

  }

  chart2() {

    let dataSource = [{
        state: "OCAK",
        equipment: 10,
        contract: 8
      }, {
        state: "ŞUBAT",
        equipment: 15,
        contract: 14
      }, {
        state: "MART",
        equipment: 18,
        contract: 16
      }, {
        state: "NİSAN",
        equipment: 5,
        contract: 5
      }, {
        state: "MAYIS",
        equipment: 17,
        contract: 13
      }, {
        state: "HAZİRAN",
        equipment: 7,
        contract: 9
      }, {
        state: "TEMMUZ",
        equipment: 16,
        contract: 13
      }, {
        state: "AĞUSTOS",
        equipment: 10,
        contract: 13
      }, {
        state: "EYLÜL",
        equipment: 17,
        contract: 21
      }, {
        state: "EKİM",
        equipment: 12,
        contract: 16
      }, {
        state: "KASIM",
        equipment: 7,
        contract: 12
      }, {
        state: "ARALIK",
        equipment: 25,
        contract: 13
      }];

    return this.$scope.chart2Options = {
      palette: ["#F2DC65", "#149681"],
      dataSource: dataSource,
      barWidth: 0.96,
      commonSeriesSettings: {
        argumentField: "state",
        type: "bar",
        hoverMode: "allArgumentPoints",
        selectionMode: "allArgumentPoints",
        label: {
          visible: true,
          backgroundColor: "#FFF",
          border: 0,
          format: {
            type: "fixedPoint",
            precision: 0
          },
          font: {
            color: "#52504D",
            weight: 700,
            size: 13
          },
          verticalOffset: 50
        },
        cornerRadius: 5
      },
      commonAxisSettings: {
        label: {
          visible: true,
          font: {
            color: "#5B5855",
            weight: "700",
            size: 13
          }
        }
      },
      valueAxis: {
        title: {
          text: 'ADET',
          font: {
            color: "#5B5855",
            size: 16,
            weight: "700"
          }
        }
      },
      series: [{
          valueField: "equipment",
          name: "Ekipman"
        },
        {
          valueField: "contract",
          name: "Sözleşme"
        }
      ],
      legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        itemTextPosition: "right"
      },
      "export": {
        enabled: true
      },
      onPointClick: function (e) {
        e.target.select();
      }
    };

  }

  chart3() {

    let data = [{
        state: "EKSKAVATÖR",
        option1: 3,
        option2: 12,
        option3: 8,
        option4: 9
    }, {
        state: "TRAKTÖR",
        option1: 13,
        option2: 5,
        option3: 3,
        option4: 8
    }, {
        state: "BİÇERDÖVER",
        option1: 3,
        option2: 9,
        option3: 8,
        option4: 6
    }, {
        state: "BEKO LOADER",
        option1: 3,
        option2: 5,
        option3: 8,
        option4: 2
    }, {
        state: "DİĞER",
        option1: 3,
        option2: 5,
        option3: 7,
        option4: 8
    }];

    return this.$scope.chart3Options = {
        dataSource: data.reverse(),
        palette:["#FFCC33", "#235B66", "#12B7CE", "#96C123", ],
        rotated:true,
        barWidth:1,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar",
            hoverMode: "allArgumentPoints",
            selectionMode: "allArgumentPoints",
            label: {
                visible: false,
                format: {
                    type: "fixedPoint",
                    precision: 0
                }
            },
            dashStyle: 'dotted'
        },
        commonAxisSettings: {
            label: {
                visible: true,
                font: {
                    color:"#5B5855",
                    weight:"700",
                    size:13
                }
            }
        },      
        series: [
            { valueField: "option1", name: "Q1" },
            { valueField: "option2", name: "Q2" },
            { valueField: "option3", name: "TEMMUZ" },
            { valueField: "option4", name: "AĞUSTOS" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        onPointClick: function (e) {
            e.target.select();
        }
    };

  }

  chart4() {

    let data = [{
        region: "2016 HEDEF",
        val: 80000
    }, {
        region: "TOPLAM GERÇEKLEŞEN",
        val: 8000
    }, {
        region: "NİSAN GERÇEKLEŞEN",
        val: 10000
    }, {
        region: "NİSAN TARIM GERÇEKLEŞEN",
        val: 9000
    }];

    return this.$scope.chart4Options = {
        type: "doughnut",
        palette:["#96C123", "#235B66", "#12B7CE", "#FFCC33" ],
        dataSource: data,
        legend: {
            horizontalAlignment: "left",
            verticalAlignment: "top",
            margin: 50,
            rowItemSpacing:20,
            font: {
              color:"#5B5855",
              weight:"700",
              size:15
            }
        },
        "export": {
            enabled: true
        },
        series: [{            
            argumentField: "region",
            label: {
                visible: true,
                format: "thousands",
                connector: {
                    visible: true
                },
                backgroundColor:'none',
                font: {
                    color:"#5B5855",
                    weight:"700",
                    size:13
                }              
            }
        }]
    };

  }

  chart5() {

      let data = [{
          country: "USA",
          hydro: 59.8,
          oil: 937.6,
          gas: 582,
          coal: 564.3,
          nuclear: 187.9
      }, {
          country: "China",
          hydro: 74.2,
          oil: 308.6,
          gas: 35.1,
          coal: 956.9,
          nuclear: 11.3
      }, {
          country: "Russia",
          hydro: 40,
          oil: 128.5,
          gas: 361.8,
          coal: 105,
          nuclear: 32.4
      }, {
          country: "Japan",
          hydro: 22.6,
          oil: 241.5,
          gas: 64.9,
          coal: 120.8,
          nuclear: 64.8
      }, {
          country: "India",
          hydro: 19,
          oil: 119.3,
          gas: 28.9,
          coal: 204.8,
          nuclear: 3.8
      }, {
          country: "Germany",
          hydro: 6.1,
          oil: 123.6,
          gas: 77.3,
          coal: 85.7,
          nuclear: 37.8
      }];

      this.$scope.chart5Options = {
        palette: ["#486C80", "#0BAAD0", "#26CC66","#E5EBE9"],
        dataSource: data,
        commonSeriesSettings: {
            argumentField: "country",
            type: "fullStackedBar"
        },
        series: [
            { valueField: "hydro", name: "Hydro-electric" },
            { valueField: "oil", name: "Oil" },
            { valueField: "gas", name: "Natural gas" },
            { valueField: "coal", name: "Coal" },
            { valueField: "nuclear", name: "Nuclear" }
        ],
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            itemTextPosition: "right"
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: arg.percentText + " - " + arg.valueText
                };
            }
        }
    };

  }


}

ChartsController.$inject = ['$scope'];

export default ChartsController;