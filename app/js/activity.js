am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("graph-bars", am4charts.XYChart);

  // Add data
  chart.data = [{
    "year": "2003",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,

  }, {
    "year": "2004",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }, {
    "year": "2005",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }, {
    "year": "2006",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }, {
    "year": "2007",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }, {
    "year": "2008",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }, {
    "year": "2009",
    "reviews": 2.5,
    "likes": 2.7,
    "comments": 4.5,
  }];

  chart.colors.list = [
    am4core.color("#9b1dd2"),
    am4core.color("#2699cc"),
    am4core.color("#00cd98"),
  ]

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  // Create series
  function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.width = am4core.percent(95);
  }

  createSeries("reviews", "reviews", false);
  createSeries("likes", "likes", true);
  createSeries("comments", "comments", false);

  // Add legend
  chart.legend = new am4charts.Legend();
})


