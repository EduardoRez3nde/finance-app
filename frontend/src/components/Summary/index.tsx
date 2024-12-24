import { Container } from "./styles";
import income from '../../assets/img/income.svg'
import outcome from '../../assets/img/outcome.svg'
import total from '../../assets/img/total.svg'
import { useTransaction } from "../hooks/useTransaction";
import { currencyFormatter } from "../../utils/formatters";


export const Summary = () => {

    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }

        if (transaction.type === 'withdraw') {
            acc.withdraw -= transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    }); 

    return (

       <Container>
            <div>
                <div className="header">
                    <h6>Entradas</h6>
                    <img src={ income } />
                </div>
                <h2>{ currencyFormatter(summary.deposit) }</h2>
            </div>
            <div>
                <div className="header">
                    <h6>Saídas</h6>
                    <img src={ outcome } alt="" />
                </div>
                <h2>{ currencyFormatter(summary.withdraw) }</h2>
            </div>
            <div className="green">
                <div className="header green">
                    <h6>Total</h6>
                    <img src={ total } alt="" />
                </div>
                <h2>{ currencyFormatter(summary.total) }</h2>
            </div>
       </Container>
    );
}