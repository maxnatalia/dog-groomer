import {Link} from "react-router-dom";
import { carouselData, sliderSettings } from "./carouselData";
import {
    Section,
    Container,
    Title,
    Subtitle,
    Img,
    Button,
    Wrapper,
    ImageWrapper,
    ContentWrapper,
    ReviewSlider, WrapperTwo
} from "./styled";

const Carousel = () => {
    return (
        <Section>
            <Container >
                <ReviewSlider {...sliderSettings}>
                    {carouselData.map((el, id) => (
                        <Wrapper key={id}>
                            <WrapperTwo>
                                <ContentWrapper>
                                    <Title>{el.title}</Title>
                                    <Subtitle>{el.subtitle}</Subtitle>
                                    {/* <Link to="/appointment">
                                        <Button>{el.buttonText}</Button>
                                    </Link> */}
                                </ContentWrapper>
                                <ImageWrapper>
                                    <Img src={el.img} alt="" />
                                </ImageWrapper>
                            </WrapperTwo>
                        </Wrapper>
                    ))}
                </ReviewSlider>
            </Container>
        </Section>
    )
};

export default Carousel;