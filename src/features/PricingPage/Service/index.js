import { Container, ServiceList, List, Price, Category } from "./styled";

const Service = ({ services }) => {
    return (
        <Container>
            {services.map((service, index) => {
                const { name, price, list } = service;
                return (
                    <ServiceList key={index}>
                        <Price>${price}</Price>
                        <Category>{name}</Category>
                        {list.map((item, index) => {
                            return (
                                <List key={index} >
                                    <li>✔️{item}</li>
                                </List>
                            )
                        })}
                    </ServiceList>
                )
            })}
        </Container>
    )
}

export default Service;