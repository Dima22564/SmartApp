// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end



// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.RadarChart);

// // Add data
// chart.data = [{
//   "category": "Research",
//   "value": 80,
//   "full": 100
// }, {
//   "category": "Marketing",
//   "value": 35,
//   "full": 100
// }, {
//   "category": "Distribution",
//   "value": 92,
//   "full": 100
// }, {
//   "category": "Human Resources",
//   "value": 68,
//   "full": 100
// }];

// // Make chart not full circle
// chart.startAngle = 0;
// chart.endAngle = 360;
// chart.innerRadius = am4core.percent(70);

// // Set number format
// chart.numberFormatter.numberFormat = "#.#'%'";

// // Create axes
// var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "category";
// categoryAxis.renderer.grid.template.location = 0;
// categoryAxis.renderer.grid.template.strokeOpacity = 0;
// categoryAxis.renderer.labels.template.horizontalCenter = "right";
// categoryAxis.renderer.labels.template.fontWeight = 500;
// categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
//   return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
// });
// categoryAxis.renderer.minGridDistance = 10;
// categoryAxis.renderer.ticks.template.disabled = true;
// categoryAxis.renderer.grid.template.disabled = true;
// categoryAxis.renderer.labels.template.disabled = true;

// var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
// valueAxis.renderer.grid.template.strokeOpacity = 0;
// valueAxis.min = 0;
// valueAxis.max = 100;
// valueAxis.strictMinMax = true;
// valueAxis.renderer.ticks.template.disabled = true;
// valueAxis.renderer.labels.template.disabled = true;
// // Create series
// var series1 = chart.series.push(new am4charts.RadarColumnSeries());
// series1.dataFields.valueX = "full";
// series1.dataFields.categoryY = "category";
// series1.clustered = false;
// series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
// series1.columns.template.fillOpacity = 0.08;
// series1.columns.template.cornerRadiusTopLeft = 20;
// series1.columns.template.strokeWidth = 0;
// series1.columns.template.radarColumn.cornerRadius = 50;

// var series2 = chart.series.push(new am4charts.RadarColumnSeries());
// series2.dataFields.valueX = "value";
// series2.dataFields.categoryY = "category";
// series2.clustered = false;
// series2.columns.template.strokeWidth = 0;
// series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
// series2.columns.template.radarColumn.cornerRadius = 20;

// series2.columns.template.adapter.add("fill", function(fill, target) {
//   return chart.colors.getIndex(target.dataItem.index);
// });

// // Add cursor
// chart.cursor = new am4charts.RadarCursor();












// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.XYChart);

// // Add data
// chart.data = [ {
//   "year": "2003",
//   "europe": 2.5,
//   "namerica": 2.7,

// }, {
//   "year": "2004",
//   "europe": 2.6,
//   "namerica": 2.7,
//   "asia": 2.2,
//   "lamerica": 1.3,
//   "meast": 0.3,
//   "africa": 0.1
// }, {
//   "year": "2005",
//   "europe": 2.8,
//   "namerica": 2.9,
//   "asia": 2.4,
//   "lamerica": 1.4,
//   "meast": 0.3,
//   "africa": 0.1
// } ];

// // Create axes
// var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "year";
// categoryAxis.title.text = "Local country offices";
// categoryAxis.renderer.grid.template.location = 0;
// categoryAxis.renderer.minGridDistance = 20;
// categoryAxis.renderer.cellStartLocation = 0.1;
// categoryAxis.renderer.cellEndLocation = 0.9;

// var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.min = 0;
// valueAxis.title.text = "Expenditure (M)";

// // Create series
// function createSeries(field, name, stacked) {
//   var series = chart.series.push(new am4charts.ColumnSeries());
//   series.dataFields.valueY = field;
//   series.dataFields.categoryX = "year";
//   series.name = name;
//   series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
//   series.columns.template.width = am4core.percent(95);
// }

// createSeries("europe", "Europe", false);
// createSeries("namerica", "North America", true);
// createSeries("asia", "Asia", false);
// createSeries("lamerica", "Latin America", true);
// createSeries("meast", "Middle East", true);
// createSeries("africa", "Africa", true);

// // Add legend
// chart.legend = new am4charts.Legend();











am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("graph-subscribers", am4charts.XYChart);

  // Add data
  chart.data = [{
    "date": new Date(2018, 3, 20),
    "value": 90
  }, {
    "date": new Date(2018, 3, 21),
    "value": 102
  }, {
    "date": new Date(2018, 3, 22),
    "value": 65
  }, {
    "date": new Date(2018, 3, 23),
    "value": 62
  },
  {
    "date": new Date(2018, 3, 24),
    "value": 55
  },
  {
    "date": new Date(2018, 3, 25),
    "value": 100
  },
  {
    "date": new Date(2018, 3, 26),
    "value": 150
  },
  {
    "date": new Date(2018, 3, 27),
    "value": 250
  },
  ];

  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

  // Create value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 260;
  

  // Create series
  var lineSeries = chart.series.push(new am4charts.LineSeries());
  lineSeries.dataFields.valueY = "value";
  lineSeries.dataFields.dateX = "date";
  lineSeries.name = "Sales";
  lineSeries.strokeWidth = 3;
  lineSeries.stroke = am4core.color("#9718d1");

  // Add simple bullet
  var bullet = lineSeries.bullets.push(new am4charts.Bullet());
  var image = bullet.createChild(am4core.Image);
  image.href = "./img/circle.png";
  image.width = 30;
  image.height = 30;
  image.horizontalCenter = "middle";
  image.verticalCenter = "middle";
})


