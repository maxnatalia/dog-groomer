import { contentData } from "./contentData";
import { Section, Container, Img, ContentWrapper } from "./styled";
import { Header } from "../../../common/Header/styled";
import { Button } from "../../.././common/Button/styled";
import { Title } from "../../.././common/Title/styled";
import { Paragraph } from "../../.././common/Paragraph/styled";

const Content = () => {
    return (
        <Section>
            <Header>General</Header>
            {contentData.map((el, index) => (
                <Container key={index}>
                    <Img src={el.img} alt='' />
                    <ContentWrapper>
                        <Title>
                            {el.title}
                        </Title>
                        <Paragraph>
                            {el.subtitle}
                        </Paragraph>
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