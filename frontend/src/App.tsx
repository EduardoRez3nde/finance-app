import React from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./page/Dashboard";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal";


Modal.setAppElement('#root');

export function App() {

  const [isTransactionModalOpen, setTransactionalModalOpen] = React.useState(false);

  const handleOpenTransactionalModal = () => {
    return setTransactionalModalOpen(true);
  }

  const handleCloseTransactionalModal = () => {
    return setTransactionalModalOpen(false);
  }

  return (
    <>
      <Header openModal={ handleOpenTransactionalModal }/>
      <Dashboard />
      <TransactionModal isOpen={ isTransactionModalOpen } 
        onRequestClose={ handleCloseTransactionalModal }
      />
      <GlobalStyle />
    </>
  );
}

