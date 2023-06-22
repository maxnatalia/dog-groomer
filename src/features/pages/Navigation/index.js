import { navigationData } from './navigationData';
import { Company, Link, List, Logo, StyledNavigation, Wrapper } from './styled';
import logo from "./logo.png";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Wrapper>
                <Logo src={logo} alt="logo" />
                <Company>Dog-Groomer</Company>
            </Wrapper>
            <List>
                {navigationData.map((link) => <li key={link.text}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
                )}
            </List>
        </StyledNavigation>
    )
};

export default Navigation;