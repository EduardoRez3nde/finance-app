import { useEffect } from "react";
import { Container } from "./styles";
import { instance } from "../../services/instanceAxios";


export const TransactionTable = () => {


    useEffect(() => {
        instance.get('offers').then(response => console.log(response.data));
    }, []);

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
                    <tr>
                        <td className="title">Desenvoler de Sites</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>vendas</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvoler de Sites</td>
                        <td>R$ 12.000,00</td>
                        <td>vendas</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td className="title">aluguel</td>
                        <td className="withdraw">R$ -600,00</td>
                        <td>vendas</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvoler de Sites</td>
                        <td>R$ 12.000,00</td>
                        <td>vendas</td>
                        <td>13/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}