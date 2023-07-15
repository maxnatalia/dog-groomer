import { StyledButton, Icon, Text } from "./styled";

const Button = ({ as = "button", href = "", icon, text, type = "button", onClick }) => {
    return (
        <StyledButton as={as} href={href} icon={icon} type={type} onClick={onClick}>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </StyledButton>
    )
};

export default Button;