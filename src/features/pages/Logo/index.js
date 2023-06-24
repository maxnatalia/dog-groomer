import logo from "./logo.png";
import { Company, StyledLogo, Wrapper } from './styled';

const Logo = () => {
    return (
        <Wrapper>
            <StyledLogo src={logo} alt="logo" />
            <Company>Dog-Groomer</Company>
        </Wrapper>
    )
};

export default Logo;