import { contentData } from "./contentData";
import { Section, Container, ImageWrapper, Img, ContentWrapper } from "./styled";
import { Header } from "../../../common/Header/styled";
import { Button } from "../../.././common/Button/styled";
import { Title } from "../../.././common/Title/styled";
import { Paragraph } from "../../.././common/Paragraph/styled";

const Content = () => {
    return (
        <Section>
            <Header>General information</Header>
            {contentData.map((el, index) => (
                <Container key={index}>
                    <ImageWrapper>
                        <Img src={el.img} alt='' />
                    </ImageWrapper>
                    <ContentWrapper>
                        <Title>
                            {el.title}
                        </Title>
                        <div>
                            <Paragraph>
                                {el.subtitle}
                            </Paragraph>
                        </div>
                        <Button to={el.buttonTO}>
                            {el.buttonText}
                        </Button>
                    </ContentWrapper>
                </Container>
            ))}
        </Section>
    )
};

export default Content;