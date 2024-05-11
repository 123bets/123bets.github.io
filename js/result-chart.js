/*==== result-chart =====*/
var ctx = document.getElementById('result-chart');
Chart.defaults.global.defaultFontFamily = 'Fira Sans';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#283a5e';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        // labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O'],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
        datasets: [{
            label: "one",
            type: 'line',
            //data: [ 40, 55, 45, 60, 65, 40],
            data: [ 42, 59, 45, 60, 62, 35],
            backgroundColor: 'rgba(64,33,186,.2)',
            borderColor: '#4021ba',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#4021ba',
            borderWidth: 2,
            pointRadius: 4
        }, {
            label: "two",
            type: 'line',
            // data: [70, 65, 125, 70, 90, 60, 110, 60,81,72],
            // data: [40, 35, 40, 25, 40, 13],
            //data: [30, 45, 35, 48, 40, 9],
            data: [22, 47, 35, 51, 45, 11],
            backgroundColor: 'rgba(255,126,0,.2)',
            borderColor: '#ff7e00',
            pointBackgroundColor: '#ff7e00',
            pointBorderColor: '#ffffff',
            borderWidth: 2,
            pointRadius: 4
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            yAlign: 'bottom',
            custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            backgroundColor: '#283a5e',

            xPadding: 15,
            yPadding: 15,
            borderWidth: 3,
            borderColor:  "rgba(255, 255, 255, .9)"
        },
        legend: {
            display: false,
            tooltips: {
                displayColors:false,
            },
            labels: {
                fontSize: 14,
                fontStyle: 'bold',
                fontColor: '#fff',
                boxWidth: 50,
                padding: 25,
                defaultFontStyle: 'bold',
                fontFamily: 'Heebo',
                usePointStyle: true,
            }
        },

        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                },
                ticks: {
                    fontSize: 14,
                }
            }]

        },
        elements: {
            line: {
                //tension: 0.00001,
                tension: 0.4,
                borderWidth: 1,
            }
        }
    }
});