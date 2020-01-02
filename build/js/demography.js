"use strict";

am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated); // Create chart instance

  var chart = am4core.create("graph-demography", am4charts.RadarChart); // Add data

  chart.data = [{
    "category": "Россия",
    "value": 80,
    "full": 100
  }, {
    "category": "Украина",
    "value": 35,
    "full": 100
  }, {
    "category": "Казахстан",
    "value": 92,
    "full": 100
  }, {
    "category": "США",
    "value": 68,
    "full": 100
  }, {
    "category": "Литва",
    "value": 12,
    "full": 100
  }];
  chart.colors.list = [am4core.color("#2699cc"), am4core.color("#00cd98"), am4core.color("#f6b900"), am4core.color("#00d0f6"), am4core.color("#b767ef")]; // Make chart not full circle

  chart.startAngle = 0;
  chart.endAngle = 360;
  chart.innerRadius = am4core.percent(70); // Set number format

  chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
    return target.dataItem.index >= 0 ? chart.colors.getIndex(target.dataItem.index) : fill;
  });
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.ticks.template.disabled = true;
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.labels.template.disabled = true;
  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;
  valueAxis.renderer.ticks.template.disabled = true;
  valueAxis.renderer.labels.template.disabled = true; // Create series

  var series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = "full";
  series1.dataFields.categoryY = "category";
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 20;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 50;
  var series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = "value";
  series2.dataFields.categoryY = "category";
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
  series2.columns.template.radarColumn.cornerRadius = 20;
  series2.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  }); // Add cursor

  chart.cursor = new am4charts.RadarCursor(); // Themes end
});