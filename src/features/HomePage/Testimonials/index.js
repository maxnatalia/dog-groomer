import { Header } from "../../../common/Header/styled";
import { Tile } from "../../../common/Tile/styled";
import { Title } from "../../../common/Title/styled";
import { Container, IconQuote, Section } from "./styled";
import dataTestimonials from "./dataTestimonials";

const Testimonials = () => {
    return (
        <Section>
            <Header>Testimonials</Header>
            <Title>See What Our Satisfied Customers Have To Say🐶</Title>
            <Container>
                {dataTestimonials.map((item) => {
                    return (<Tile key={item.id}>
                        <span>🐶🐶🐶🐶🐶</span>
                        <h3>{item.name}</h3>
                        <blockquote>{item.info}</blockquote>
                        <IconQuote />
                    </Tile>)
                })}
            </Container>
        </Section>
    )
}

export default Testimonials;