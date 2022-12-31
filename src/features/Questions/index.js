import data from "./data";
import { Main, Section } from "./styled";
import Question from "./Question";

const Questions = () => {

  return (
    <Main>
      <Section>
        {data.map((question) =>
          <Question key={question.id} {...question} />
        )}
      </Section>
    </Main>
  )
};

export default Questions;