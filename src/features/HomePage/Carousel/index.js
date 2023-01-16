import { carouselData } from "./carouselData";
import {
    Section,
    Button,
    Container,
    Title,
    Subtitle,
    Img,
    Wrapper,
    ContentWrapper,
} from "./styled";

const Carousel = () => {
    return (
        <Section>
            <Container >
                {carouselData.map((el, id) => (
                    <Wrapper key={id}>
                        <Button left>Preview</Button>
                        <ContentWrapper>
                            <Title>{el.title}</Title>
                            <Subtitle>{el.subtitle}</Subtitle>
                        </ContentWrapper>
                        <Img src={el.img} alt="" />

                        <Button right>Next</Button>
                    </Wrapper>

                ))}

            </Container>
        </Section>
    )
};

export default Carousel;