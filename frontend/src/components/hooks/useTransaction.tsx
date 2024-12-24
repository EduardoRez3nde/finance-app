import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { instance } from "../../services/instanceAxios";


interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode; // Aceita qualquer tipo 
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: transactionInput) => Promise<void>;
}

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>;

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);


export const TransactionProvider = ({ children }: TransactionProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        instance.get('/transactions').then(response => setTransactions(response.data.transactions));
    }, []);
    
    const createTransaction = async (transactionInput: transactionInput) => {
        const response = await instance.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return (
        <TransactionContext.Provider value={ {transactions, createTransaction} }>
            { children }
        </TransactionContext.Provider>
    );
}

export const useTransaction = () => useContext(TransactionContext);

