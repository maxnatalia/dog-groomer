import data from "./data";
import { Section, Container, Paragraph } from "./styled";
import Question from "./Question";
import { Header } from "../../common/Header/styled";
import { Button } from "../../common/Button/styled";
import { Title } from "../../common/Title/styled";

const Questions = () => {

  return (
    <Section>
      <Header>Q&A</Header>
      <Container>
        {data.map((question) =>
          <Question key={question.id} {...question} />
        )}
      </Container>
      <div>
        <Header>Want To Know More?</Header>
        <Title>Have a question that isn't answered here?</Title>
        <Paragraph>Get in touch and we will be happy to help.🐶</Paragraph>
        <Button to="/appointment">Contact Us</Button>
      </div>
    </Section>
  )
};

export default Questions;