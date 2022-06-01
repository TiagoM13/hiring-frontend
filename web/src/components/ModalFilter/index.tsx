import { useState } from 'react';
import Modal from 'react-modal'

import imgClose from "../../assets/close.svg"
import { Api } from '../service/api';
import { Container } from './styles';

interface ButtonFilterProps {
  onCloseModalFilter: () => void;
  isOpen: boolean;
  resultFilter: any;
}

export function ModalFilter({ isOpen, onCloseModalFilter, resultFilter }: ButtonFilterProps) {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [purchasedAt, setPurchasedAt] = useState('')
  const [purchasedAmount, setPurchasedAmount] = useState(0)
  const [compare, setCompare] = useState('')

  async function getData() {
    const api: Api = new Api();
    const resultStockCurrentPriceRoute = await api.getStockCurrentPrice(name);
    const resultStockHistoryRoute = await api.getStockHistory(name, from, to);
    const resultStockGainsRoute = await api.getStockGains(name, purchasedAt, purchasedAmount);
    const resultCompareStocksRoute = await api.getCompareStocks(name, compare);

    resultFilter({
      price: resultStockCurrentPriceRoute,
      history: resultStockHistoryRoute,
      gains: resultStockGainsRoute,
      compare: resultCompareStocksRoute,
    }) 

  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-filter"
      >
        <button onClick={onCloseModalFilter} className="react-close-modal">
          <img src={imgClose} alt="" />
        </button>
        <Container>
          <div>
            <h3>Ver dados da Empresa</h3>
            <label>Empresa:</label>
            <input
              type="text"
              placeholder="Código da Empresa"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <label htmlFor="">Data inicial:</label>
            <input
              type="date"
              value={from}
              onChange={event => setFrom(event.target.value)}
            />
            <label htmlFor="">Data final:</label>
            <input
              type="date"
              value={to}
              onChange={event => setTo(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Data da compra da ação:</label>
            <input
              type="date"
              value={purchasedAt}
              onChange={event => setPurchasedAt(event.target.value)}
            />
            <label htmlFor="">Valor da ação:</label>
            <input
              type="number"
              defaultValue={purchasedAmount}
              onChange={event => setPurchasedAmount(Number(event.target.value))}
            />
          </div>

          <div>
            <label htmlFor="">Código da empresa a comparar:</label>
            <input
              type="text"
              placeholder="Código da Empresa"
              value={compare}
              onChange={event => setCompare(event.target.value)}
            />
          </div>

          <button type="button" className="button-submit" onClick={getData}>
            Filtrar
          </button>
        </Container>
      </Modal>
    </div>
  )
}