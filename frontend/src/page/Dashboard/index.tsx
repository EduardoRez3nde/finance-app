import { Container } from "./styles";
import { Summary } from "../../components/Summary";
import { TransactionTable } from "../../components/TransactionTable";
import { TransactionModal } from "../../components/TransactionModal";


export const Dashboard = () => {

    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}