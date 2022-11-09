import { Nav, Container, LogoWrapper, Logo, NaVMenu, NavItem, NavLinks, MenuBars, MenuMobile, MenuClose } from "./styled";
import logo from "./logo.svg";
import { navigationData } from "./navigationData";
import { useState } from "react";

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    };

    const closeMobileMenu = () => {
        setShow(false)
    };

    return (
        <Nav>
            <Container>
                <LogoWrapper>
                    <Logo src={logo} alt="" /><p>Dog Groomer</p>
                </LogoWrapper>
                <MenuMobile onClick={handleClick} >
                    {show ? <MenuClose /> : <MenuBars />}
                </MenuMobile>
                <NaVMenu show={show} >
                    {navigationData.map((item, index) => (
                        <NavItem key={index}>
                            <NavLinks onClick={() => closeMobileMenu()} to={item.to}>
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