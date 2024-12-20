import logo from '../../assets/img/logo.svg';
import { Container } from './styles';

interface Props {
    openModal: () => void; 
}

export const Header = ({ openModal }: Props) => {

    return (      
        <Container>
            <div>
                <img src={ logo } alt="RZ Money" />
                <button onClick={ openModal } type='button'>New Transaction</button>
            </div>
        </Container>
    );
}