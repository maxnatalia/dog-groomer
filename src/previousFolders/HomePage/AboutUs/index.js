import { Header } from "../../Header/styled";
import { Title } from "../../Title/styled";
import { Paragraph } from "../../Paragraph/styled";
import { List, Wrapper, Image, Container, Item } from "./styled";
import dogImg from "./dog3.jpg";

const AboutUs = () => {
    return (
        <section>
            <Header>About Us</Header>
            <Container>
                <Title>The "Groom Dog Philosophy"</Title>
                <Paragraph special>
                    The "Groom Dog Philosophy" is a set of beliefs and principles that guide the approach to dog grooming. This philosophy may include the following elements:
                </Paragraph>
                <List>
                    <Item>🐶Health and comfort:</Item>
                    <Paragraph>
                        The priority of the groom dog philosophy is to prioritize the health and comfort of the dog. This includes using gentle and safe grooming techniques, avoiding excessive handling or stress, and ensuring that the dog is relaxed throughout the grooming session.
                    </Paragraph>

                    <Item>🐶Holistic approach:</Item>
                    <Paragraph>
                        The groom dog philosophy recognizes that grooming is not just about making a dog look good, but it is also about their overall well-being. This may include considering the dog's coat, skin, and nail health, as well as their overall health and comfort.
                    </Paragraph>

                    <Item>🐶Customized grooming:</Item>
                    <Paragraph>
                        The groom dog philosophy emphasizes the importance of customized grooming to meet the individual needs of each dog. This may include considering the dog's breed, coat type, and lifestyle, as well as their specific grooming needs.
                    </Paragraph>

                    <Item>🐶Respect for the dog:</Item>
                    <Paragraph>
                        The groom dog philosophy is based on the belief that dogs deserve respect and humane treatment. This includes using positive reinforcement techniques, avoiding harsh or abusive handling, and treating each dog as an individual with their own unique needs and personality.
                    </Paragraph>

                    <Paragraph special>
                        Overall, the groom dog philosophy is about providing a high-quality grooming experience that is safe, gentle, and tailored to the individual needs of each dog.
                    </Paragraph>
                </List>
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