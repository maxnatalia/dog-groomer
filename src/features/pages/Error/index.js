import ButtonLink from "../../../common/ButtonLink";
import Section from "../../../common/Section";
import Title from "../../../common/Title";
import { Paragraph, Wrapper } from "./styled";

const Error = () => {
    return (
        <Section>
            <Title text={"Error"} extraContent />
            <Wrapper>
                <Paragraph>Sorry, something went wrong...🐾</Paragraph>
                <ButtonLink to="/" text={"Back Home"} />
            </Wrapper>
        </Section>
    )
};

export default Error;