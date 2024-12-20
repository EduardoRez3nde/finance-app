import Modal from 'react-modal';
import { Container, TypeTransactionContainer } from './styles';
import incomeImg from '../../assets/img/income.svg'
import outcomeImg from '../../assets/img/outcome.svg'
import closeButton from '../../assets/img/close.svg'


interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const TransactionModal = ({ isOpen, onRequestClose }: Props) => {

    return (
        <Modal
            isOpen={ isOpen } 
            onRequestClose={ onRequestClose }
            overlayClassName="custom-modal-overlay"
            className="custom-modal-content" 
        >
            <button 
                className='react-modal-close' type='button' onClick={onRequestClose}>
                <img src={ closeButton } alt="Fechar Modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder='Titulo' type="text" />
                <input placeholder='Valor' type="number" />

                <TypeTransactionContainer>
                    <button type='submit'><img src={ incomeImg } alt="Entrada" />Entrada</button>
                    <button type='submit'><img src={ outcomeImg } alt="Saída" />Saída</button>
                </TypeTransactionContainer>

                <input placeholder='Categoria' type="text" />
                <button className = 'button-register' type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    );
}
