import { Nav, Container, LogoWrapper, Logo, NaVMenu, NavItem, NavLinks } from "./styled";
import logo from "./logo.svg";
import { navigationData } from "./navigationData";

const Navigation = () => {
    return (
        <Nav>
            <Container>
                <LogoWrapper>
                    <Logo src={logo} alt="" /><p>Dog Groomer</p>
                </LogoWrapper>
                <NaVMenu>
                    {navigationData.map((item, index) => (
                        <NavItem key={index}>
                            <NavLinks to={item.to}>
                                {item.text}
                            </NavLinks>
                        </NavItem>
                    ))}
                </NaVMenu>
            </Container>
        </Nav>
    )
};

export default Navigation;