import logo from "./logo.png";
import { Text, StyledLogo, Wrapper } from './styled';

const Logo = ({ onlyLogo, text = "Dog-Groomer" }) => {
    return (
        <Wrapper to={"/"} title={"Home"}>
            {onlyLogo
                ? <StyledLogo src={logo} alt="logo" />
                : <>
                    <StyledLogo src={logo} alt="logo" />
                    <Text>{text}</Text>
                </>
            }
        </Wrapper>
    )
};

export default Logo;