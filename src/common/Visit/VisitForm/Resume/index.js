import Paragraph from "../../../Paragraph";
import Title from "../../../Title";
import { Wrapper } from "./styled";

const Resume = ({ resume }) => {
    return (
        <Wrapper>
            <Title text={"Dear Customer,"} extraContent />
            <Paragraph>Thank you for signing up for an appointment at our Dog Groomer salon! Below is a summary of your enrollment:</Paragraph>
            <Paragraph>{resume}</Paragraph>
        </Wrapper>
    )
};

export default Resume;