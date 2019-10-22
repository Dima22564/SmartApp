// $(document).ready(function () {
//     var ctx = document.getElementById('bar-chart-1').getContext('2d');
//     var myChart_1 = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [32, 48, 100, 90, 87, 45, 21, 10, 57],
//                 borderRadius: 4,
//                 backgroundColor: [
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                 ],
//                 borderColor: [
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                 ],
//                 hoverBackgroundColor: [
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                 ],
//                 borderWidth: 0,
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true,
//                         suggestedMin: 0,
//                         suggestedMax: 100,
//                         stepSize: 50,
//                         fontFamily: 'Montserrat',
//                         fontSize: 13,
//                         fontColor: 'rgba(20, 16, 41, 0.8)',
//                     },
//                     gridLines: {
//                         color: 'transparent',
//                         offsetGridLines: true
//                     }
//                     // 'lineWidth'
//                 }],
//                 xAxes: [{
//                     ticks: {
//                         fontFamily: 'Montserrat',
//                         fontSize: 13,
//                         fontColor: 'rgba(20, 16, 41, 0.8)',
//                     },
//                     barThickness: 32,
//                     gridLines: {
//                         color: 'transparent'
//                     }
//                     // minBarLength: 0
//                 }]
//             },
//             legend: {
//                 display: false,
//             },
//             title: {
//                 display: false,
//             },
//             tooltips: {
//                 enabled: false
//             }
//         }
//     });
//     ctx.canvas.width = 3000;
//     var ctx = document.getElementById('bar-chart-2').getContext('2d');
//     var myChart_2 = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [32, 48, 100, 90, 87, 45, 21, 10, 57],
//                 borderRadius: 4,
//                 backgroundColor: [
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                 ],
//                 borderColor: [
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                     'transparent',
//                 ],
//                 hoverBackgroundColor: [
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                 ],
//                 borderWidth: 0
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true,
//                         suggestedMin: 0,
//                         suggestedMax: 100,
//                         stepSize: 50,
//                         fontFamily: 'Montserrat',
//                         fontSize: 13,
//                         fontColor: 'rgba(20, 16, 41, 0.8)',
//                     },
//                     gridLines: {
//                         color: 'transparent'
//                     }
//                     // 'lineWidth'
//                 }],
//                 xAxes: [{
//                     ticks: {
//                         fontFamily: 'Montserrat',
//                         fontSize: 13,
//                         fontColor: 'rgba(20, 16, 41, 0.8)',
//                     },
//                     barThickness: 32,
//                     gridLines: {
//                         color: 'transparent'
//                     }
//                     // minBarLength: 0
//                 }]
//             },
//             legend: {
//                 display: false,
//             },
//             title: {
//                 display: false,
//             },
//             tooltips: {
//                 enabled: false
//             },
//             responsive: true,
//             // barValueSpacing: 40,
//         }
//     });
//     Chart.defaults.global.responsive = true;
//     // Chart.defaults.global.maintainAspectRatio = false;
//     // Chart.canvas.parentNode.style.width = '128px';
//     function removeData(chart) {
//         if(screen.width < 768){
//             for(let i = 0; i < 2; i++){
//                 chart.data.labels.pop();
//                 chart.data.datasets.forEach((dataset) => {
//                     dataset.data.pop();
//                 });
//                 chart.resize();
//                 chart.update();
//             }
//         }
//     }
// var count = 0
//     $(window).on('resize', function(){
//         if(screen.width < 768 && myChart_1.data.labels.length == 9){
//             if(count <= 0){
//                 removeData(myChart_1)
//                 count++
//             }
//             else{
//                 return 0
//             }
//         }
//         if(screen.width < 768 && myChart_2.data.labels.length == 9){
//             if(count <= 0){
//                 removeData(myChart_1)
//                 count++
//             }
//             else{
//                 return 0
//             }
//         }
//     })
//     removeData(myChart_1);
//     removeData(myChart_2);
// });
"use strict";