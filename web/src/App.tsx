import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ModalFilter } from "./components/ModalFilter";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyles } from "./styles/global-styles";
import { Api } from "./components/service/api";
import axios from "axios";

Modal.setAppElement("#root");

export interface IPriceProps {
  name: string;
  lastPrice: number;
  pricedAt: string;
}

export interface IHistoryProps {
  name: string;
  prices: [
    {
      opening: number,
      low: number,
      high: number,
      closing: number,
      pricedAt: string,
      volume: number,
    }
  ]
}

export interface IGainsProps {
  name: string;
  priceAtDate: number,
  purchasedAmount: number,
  purchasedAt: string,
  capitalGains: number,
  lastPrice: number
}

export interface ICompareProps {
  lastPrices: [
    {
      name: string,
      lastPrice: number,
      pricedAt: string,
    }
  ]
}

export interface IResult {
  price: IPriceProps,
  history: IHistoryProps,
  gains: IGainsProps,
  compare: ICompareProps,
}

export function App() {
  const api: Api = new Api();
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [result, setResult] = useState<IResult>({} as IResult);
  
  function handleOpneModalFilter() {
    setIsOpenFilter(true)
  }
  
  function handleCloseModalFilter() {
    setIsOpenFilter(false)
  }
  async function getData() {
    setResult({
      ...result,
      price: await api.getStockCurrentPrice(),
      gains: await api.getStockGains(),
      history: await api.getStockHistory(),
      compare: await api.getCompareStocks(),
    });
  }

  useEffect(() => { 
    getData();
  }, []);
  
  return (
    <div>
      <Header onOpenModalFilter={handleOpneModalFilter} />
      <Dashboard response={result} />
      <ModalFilter
        isOpen={isOpenFilter}
        resultFilter={setResult}
        onCloseModalFilter={handleCloseModalFilter}
      />
      <GlobalStyles />
    </div>
  )
}