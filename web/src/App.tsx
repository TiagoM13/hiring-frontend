import { useState } from "react";
import Modal from "react-modal";
import { ModalFilter } from "./components/ModalFilter";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyles } from "./styles/global-styles";

Modal.setAppElement("#root");

export function App() {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  function handleOpneModalFilter() {
    setIsOpenFilter(true)
  }

  function handleCloseModalFilter() {
    setIsOpenFilter(false)
  }

  return (
    <div>
      <Header onOpenModalFilter={handleOpneModalFilter}/>
      <Dashboard />
      <ModalFilter 
        isOpen={isOpenFilter}
        onCloseModalFilter={handleCloseModalFilter}
      />
      <GlobalStyles />
    </div>
  )
}