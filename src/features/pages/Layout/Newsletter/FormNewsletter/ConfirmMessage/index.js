import Title from "../../../../../../common/Title";
import Paragraph from "../../../../../../common/Paragraph";
import { Message } from "./styled";

const ConfirmMessage = ({ message }) => {
    return (
        <Message>
            <Title text={"Thank you for subscribing to our newsletter!"} />
            <Paragraph>{message}</Paragraph>
            <Paragraph>Thank you once again and welcome to our community!</Paragraph>
        </Message>
    )
};

export default ConfirmMessage;