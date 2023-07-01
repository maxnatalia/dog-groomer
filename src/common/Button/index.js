import { StyledButton, Icon, Text } from "./styled";

const Button = ({ as = "button", href = "", icon, text }) => {
    return (
        <StyledButton as={as} href={href} icon={icon}>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </StyledButton>
    )
};

export default Button;