import { useState, useEffect } from "react"
import { carouselData } from "./carouselData";
import { Header } from "../../Header/styled";
import {
    SectionHero,
    Container,
    Img,
    Wrapper,
    ContentWrapper,
    ImageContainer
} from "./styled";

const Carousel = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > carouselData.length - 1) {
                    index = 0
                }
                return index
            })
        }, 3000)
        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <SectionHero>
            <Container>
                {carouselData.map((el, id) => (
                    <Wrapper
                        activeSlide={index === id}
                        key={id}>
                        <ContentWrapper>
                            <Header>{el.title}</Header>
                        </ContentWrapper>
                        <ImageContainer>
                            <Img src={el.img} alt="" />
                        </ImageContainer>
                    </Wrapper>
                ))}
            </Container>
        </SectionHero>
    )
};

export default Carousel;