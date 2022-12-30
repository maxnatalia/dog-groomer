import { useState } from "react";
import data from "./data";
import { Main, Section } from "./styled";
import Question from "./Question";


const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <Main>
      <Section>
        {questions.map((question) =>
          <Question key={question.id} {...question} />
        )}
      </Section>
    </Main>
  )
};

export default Questions;