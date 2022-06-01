export class Api {
  baseURL: string = "http://localhost:3001"

  async getStockCurrentPrice(stockName: string = 'AMZN') {
    return await fetch(`${this.baseURL}/stock/${stockName}/quote`)
      .then(response => (response.json()))
      .then(data => data)
      .catch(err => console.error(err))
  }

  async getStockHistory(stockName: string = 'amzn', from: string = '2021-01-01', to: string = '2021-03-01') {
    return await fetch(`${this.baseURL}/stocks/${stockName}/history?from=${from}&to=${to}`)
      .then(response => (response.json()))
      .then(data => (data))
      .catch(err => console.error(err))
  }
  async getStockGains(stockName: string = 'amzn', purchasedAt: string = '2021-01-01', purchasedAmount: number = 10000) {
    return await fetch(`${this.baseURL}/stocks/${stockName}/gains?purchasedAt=${purchasedAt}&purchasedAmount=${purchasedAmount}`)
      .then(response => (response.json()))
      .then(data => (data))
      .catch(err => console.error(err))
  }
  async getCompareStocks(stockName: string = 'amzn', stocksToCompare: string = 'amzn') {
    return await fetch(`${this.baseURL}/stocks/${stockName}/compare?stocksToCompare=${stocksToCompare}`)
      .then(response => (response.json()))
      .then(data => (data))
      .catch(err => console.error(err))
  }
}