'use strict'
//
$(function () {
  getBTCUSDPrice()
  // Disable Legend & Title From Chartjs
  Chart.defaults.plugins.legend.display = false
  Chart.defaults.plugins.title.display = false
  var price = [] // Prices Array
  var time = [] // Times Array
  var heroChart // Chart
  // Get USD Price of BTC from coingecko Free API
  function getBTCUSDPrice () {
    price = []
    time = []
    $.ajax({
      url:
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=1m',
      type: 'GET',

      success: function (response) {
        $.each(response['prices'], function (key, value) {
          time.push('') // Adding Blank To Not Show Date. To Show date insert value[0]
          price.push(value[1])
        })
        InitalizeChart()
      }
    })
  } //
  function InitalizeChart () {
    var half = Math.ceil(time.length / 2)
    var timeHalf = time.splice(0, half)
    var priceFirstHalf = price.splice(0, half)
    var priceSecondHalf = price.splice(-half)
    heroChart = new Chart(document.getElementById('BtcUsdChart'), {
      type: 'line',
      data: {
        labels: timeHalf,
        datasets: [
          {
            label: 'BTC USD',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: priceFirstHalf
          }
        ]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          yAxes: {
            display: false,
            position: 'right',
            ticks: {
              beginAtZero: false
            }
          },
          xAxes: {
            display: false,
            ticks: {
              beginAtZero: false
            }
          }
        },
        maintainAspectRatio: false
      }
    })
    var priceSecondHalfCount = priceSecondHalf.length
    var i = 0
    var chartUpdater = setInterval(function () {
      priceFirstHalf.shift()
      priceFirstHalf.push(priceSecondHalf[i])
      heroChart.options.animation.duration = '0'
      heroChart.update()
      i++
      if (priceSecondHalfCount <= i) {
        clearInterval(chartUpdater)
        i = 0
        heroChart.destroy()
        getBTCUSDPrice()
      }
    }, 1000)
  }
})
