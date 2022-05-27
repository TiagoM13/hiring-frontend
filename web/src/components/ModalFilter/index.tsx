import { useState } from 'react';
import Modal from 'react-modal'

import imgClose from "../../assets/close.svg"
import { Api } from '../service/api';
import { Container } from './styles';

interface ButtonFilterProps {
  onCloseModalFilter: () => void;
  isOpen: boolean;
}

export function ModalFilter({ isOpen, onCloseModalFilter }: ButtonFilterProps) {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [purchasedAt, setPurchasedAt] = useState('')
  const [purchasedAmount, setPurchasedAmount] = useState(0)
  const [compare, setCompare] = useState('')

  function getData() {
    let api: Api = new Api();
    console.log(api.getStockCurrentPrice(name))    
    console.log(api.getStockHistory(name, from, to)) 
    console.log(api.getStockGains(name, purchasedAt, purchasedAmount))   
    console.log(api.getCompareStocks(name, compare)) 
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
          <input 
            value={name}
            type="text" 
            placeholder="Nome da Empresa"
            onChange={event => setName(event.target.value)}
          />
          <input 
            type="date" 
            value={from}
            onChange={event => setFrom(event.target.value)}
          />
          <input 
            type="date" 
            value={to}
            onChange={event => setTo(event.target.value)}
          />
          <input 
            type="date" 
            value={purchasedAt}
            onChange={event => setPurchasedAt(event.target.value)}
          />
          <input 
            type="number"
            value={purchasedAmount}
            onChange={event => setPurchasedAmount(Number(event.target.value))} 
          />
          <input 
            type="text" 
            value={compare}
            onChange={event => setCompare(event.target.value)}
          />
          <button type="button" className="button-submit" onClick={getData}>
            Filtrar
          </button>
        </Container>
      </Modal>
    </div>
  )
}