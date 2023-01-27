import { Header } from "../../../common/Header/styled";
import { Title } from "../../../common/Title/styled";
import { List, Wrapper, Image, Container, Item } from "./styled";
import dogImg from "./dog3.jpg";

const AboutUs = () => {
    return (
        <section>
            <Header>About Us</Header>
            <Container>
                <Wrapper>
                    <Title>Why Choose Us?</Title>
                    <Image src={dogImg} alt="dog img" />
                </Wrapper>
                <List>
                    <Item>🐶 Experienced, Professional Dog Groomer</Item>
                    <Item>🐶 Grooming dogs since 2010</Item>
                    <Item>🐶 One-to-one attention for your dog</Item>
                    <Item>🐶 Homely atmosphere</Item>
                    <Item>🐶 Dogs aren’t put in cages or tied up</Item>
                </List>
            </Container>
        </section>
    )
}

export default AboutUs;