$(function () {
  fetchPrices()

  let dollarUSLocale = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  let percentUSLocale = Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2
  })

  function format24hrChange (value) {
    return `<span class="${
      value >= 0 ? 'positive-change' : 'negative-change'
    }">${value >= 0 ? '+' : ''}${percentUSLocale.format(value / 100)}</span>`
  }

  function fetchPrices () {
    $.ajax({
      url:
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,bitcoin-cash&vs_currencies=usd&include_24hr_change=true',
      type: 'GET',
      success: function (data) {
        $('#bitcoinPriceBox').text(
          `${dollarUSLocale.format(data['bitcoin']['usd'])}`
        )
        $('#ethereumPriceBox').text(
          `${dollarUSLocale.format(data['ethereum']['usd'])}`
        )
        $('#dogecoinPriceBox').text(
          `${dollarUSLocale.format(data['dogecoin']['usd'])}`
        )
        $('#bitcoin-cashPriceBox').text(
          `${dollarUSLocale.format(data['bitcoin-cash']['usd'])}`
        )

        $('#bitcoinPriceChangeBox').html(
          `${format24hrChange(data['bitcoin']['usd_24h_change'])}`
        )
        $('#ethereumPriceChangeBox').html(
          `${format24hrChange(data['ethereum']['usd_24h_change'])}`
        )
        $('#dogecoinPriceChangeBox').html(
          `${format24hrChange(data['dogecoin']['usd_24h_change'])}`
        )
        $('#bitcoin-cashPriceChangeBox').html(
          `${format24hrChange(data['bitcoin-cash']['usd_24h_change'])}`
        )
      }
    })
  }

  setInterval(function () {
    fetchPrices()
  }, 20000)
})
