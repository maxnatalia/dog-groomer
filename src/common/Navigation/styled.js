import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav=styled.nav`
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Container=styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LogoWrapper=styled(Link)`
    display: flex;
    padding: 10px;
    text-decoration: none;
`;

export const Logo=styled.img`
`;

export const NaVMenu=styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 10px;
`;

export const NavItem=styled.li`
    

`;

export const NavLinks=styled(NavLink)`
`;