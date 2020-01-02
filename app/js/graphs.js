



am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

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


