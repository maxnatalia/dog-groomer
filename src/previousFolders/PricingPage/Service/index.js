import { Container, List, Price, Category } from "./styled";
import { Tile } from "../../Tile/styled";

const Service = ({ services }) => {
    return (
        <Container>
            {services.map((service, index) => {
                const { name, price, list } = service;
                return (
                    <Tile key={index}>
                        <Price>${price}</Price>
                        <Category>{name}</Category>
                        {list.map((item, index) => {
                            return (
                                <List key={index} >
                                    <li>✔️{item}</li>
                                </List>
                            )
                        })}
                    </Tile>
                )
            })}
        </Container>
    )
}

export default Service;