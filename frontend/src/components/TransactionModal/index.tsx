import Modal from 'react-modal';
import { Button, Container, TypeTransactionContainer } from './styles';
import incomeImg from '../../assets/img/income.svg'
import outcomeImg from '../../assets/img/outcome.svg'
import closeButton from '../../assets/img/close.svg'
import { FormEvent, useContext, useState } from 'react';
import { useTransaction } from '../hooks/useTransaction';


interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const TransactionModal = ({ isOpen, onRequestClose }: Props) => {

    const { createTransaction } = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const handleCreateNewTransaction = async (event: FormEvent) => {

        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={ isOpen } 
            onRequestClose={ onRequestClose }
            overlayClassName="custom-modal-overlay"
            className="custom-modal-content" 
        >
            <button 
                className='react-modal-close' type='button' 
                onClick={ onRequestClose }
            >
                <img src={ closeButton } alt="Fechar Modal" />
            </button>
            <Container onSubmit={ handleCreateNewTransaction }>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder='Titulo' 
                    type="text" 
                    value={ title } 
                    onChange={ event => setTitle(event.target.value) }
                />
                <input 
                    placeholder='Valor' 
                    type="number"
                    value= { amount }
                    onChange={ event => setAmount(Number(event.target.value)) }
                />

                <TypeTransactionContainer>
                    <Button 
                        onClick={() => { setType('deposit'); }}
                        $isActive={ type === 'deposit' }
                        $colorActive='green'
                        type='submit'>
                        <img src={ incomeImg } alt="Entrada" />Entrada
                    </Button>
                    <Button 
                        onClick={() => { setType('withdraw'); }}
                        $isActive={ type === 'withdraw' }
                        $colorActive='red'
                        type='submit'>
                        <img src={ outcomeImg } alt="Saída" />Saída
                    </Button>
                </TypeTransactionContainer>

                <input
                    placeholder='Categoria'
                    type="text"
                    value={ category }
                    onChange={ event => setCategory(event.target.value) }
                />
                <button className = 'button-register' type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    );
}
