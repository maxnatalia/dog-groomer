import logo from "./logo.png";
import { Company, StyledLogo, Wrapper } from './styled';

const Logo = ({ onlyLogo }) => {
    return (
        <Wrapper to={"/"} title={"Home"}>
            {onlyLogo
                ? <StyledLogo src={logo} alt="logo" />
                : <>
                    <StyledLogo src={logo} alt="logo" />
                    <Company>Dog-Groomer</Company>
                </>
            }
        </Wrapper>
    )
};

export default Logo;