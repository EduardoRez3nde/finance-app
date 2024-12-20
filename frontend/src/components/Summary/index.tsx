import { Container } from "./styles";
import income from '../../assets/img/income.svg'
import outcome from '../../assets/img/outcome.svg'
import total from '../../assets/img/total.svg'


export const Summary = () => {

    return (

       <Container>
            <div>
                <div className="header">
                    <h6>Entradas</h6>
                    <img src={ income } />
                </div>
                <h2>R$ 17.400,00</h2>
            </div>
            <div>
                <div className="header">
                    <h6>Saídas</h6>
                    <img src={ outcome } alt="" />
                </div>
                <h2>R$ 1.259,00</h2>
            </div>
            <div className="green">
                <div className="header green">
                    <h6>Total</h6>
                    <img src={ total } alt="" />
                </div>
                <h2>R$ 16.141,00</h2>
            </div>
       </Container>
    );
}