import axios from "axios";

export class Api {
  baseURL: string = "http://localhost:3001"
  
  async getStockCurrentPrice(stockName: string) {
    return await axios.get(`${this.baseURL}/stock/${stockName}/quote`)
      .then(response => (response.data))
      .catch(err => console.error(err))
  }

  async getStockHistory(stockName: string, from: string, to: string) {
    return await axios.get(`${this.baseURL}/stocks/${stockName}/history?from=${from}&to=${to}`)
      .then(response => (response.data))
      .catch(err => console.error(err))
  }
  async getStockGains(stockName: string, purchasedAt: string, purchasedAmount: number) {
    return await axios.get(`${this.baseURL}/stocks/${stockName}/gains?purchasedAt=${purchasedAt}&purchasedAmount=${purchasedAmount}`)
      .then(response => (response.data))
      .catch(err => console.error(err))
  }
  async getCompareStocks(stockName: string, stocksToCompare: string) {
    return await axios.get(`${this.baseURL}/stocks/${stockName}/compare?stocksToCompare=${stocksToCompare}`)
      .then(response => (response.data))
      .catch(err => console.error(err))
  }
}