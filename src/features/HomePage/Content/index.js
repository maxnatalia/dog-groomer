import { contentData } from "./contentData";
import { Link } from "react-router-dom";
import { Section, Container, ImageWrapper, Img, ContentWrapper, Title, Subtitle } from "./styled";
import { Button } from "../../.././common/Button/styled";

const Content = () => {
    return (
        <Section>
            {contentData.map((el, index) => (
                <Container key={index}>
                    <ImageWrapper>
                        <Img src={el.img} alt='' />
                    </ImageWrapper>
                    <ContentWrapper>
                        <Title>
                            {el.title}
                        </Title>
                        <Subtitle>
                            {el.subtitle}
                        </Subtitle>
                        <Link to={el.buttonTO}>
                            <Button>
                                {el.buttonText}
                            </Button>
                        </Link>
                    </ContentWrapper>
                </Container>
            ))}
        </Section>
    )
};

export default Content;