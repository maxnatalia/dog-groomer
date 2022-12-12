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

    const [colorNav, setColorNav] = useState(false);

    const changeColorNav = () => {
        if(window.scrollY >= 80) {
            setColorNav(true)
        } else {
            setColorNav(false)
        }
    };

    window.addEventListener("scroll", changeColorNav)

    return (
        <Nav colorNav={colorNav} >
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
                            <NavLinks to={item.to} onClick={() => closeMobileMenu()}  >
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