import { Container, Title, Info } from "./styled";
import { Button } from "../../common/Button/styled";

const ErrorPage = () => {
    return (
        <Container>
            <Title>404</Title>
            <Info>ErrorPage</Info>
            <Button to="/">Back to Home</Button>
        </Container>
    )
}

export default ErrorPage;