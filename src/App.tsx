import {useState} from "react";
import Modal from "react-modal";
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";

import {GlobalStyle} from './styles/global'
import {NewTransactionModal} from "./components/NewTransactionModal";
import {TransactionsContext, TransactionsProvider} from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModelOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransaction() {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionModal
                isOpen={isNewTransactionModelOpen}
                onRequestClose={handleCloseNewTransaction}
            />
            <GlobalStyle/>
        </TransactionsProvider>
    );
}