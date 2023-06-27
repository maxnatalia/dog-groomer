import { StyledButton, Icon, Text } from "./styled";

const Button = ({ icon, text }) => {
    return (
        <StyledButton icon={icon}>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </StyledButton>
    )
};

export default Button;