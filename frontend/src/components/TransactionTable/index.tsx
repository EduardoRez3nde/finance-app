import { Container } from "./styles";
import { currencyFormatter, dateFormatter } from "../../utils/formatters";
import { useTransaction } from "../hooks/useTransaction";


export const TransactionTable = () => {

    const { transactions } = useTransaction();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>data</th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="title">{ transaction.title }</td>
                            <td className={ transaction.type }> { currencyFormatter(transaction.amount) }</td>
                            <td>{ transaction.type }</td>
                            <td>{ dateFormatter(transaction.createdAt) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

