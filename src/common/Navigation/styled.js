import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
    position: fixed;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
    display: flex;
    padding: 10px;
    text-decoration: none;
    position: absolute;
    color: #000958;
`;

export const Logo = styled.img`

`;

export const NaVMenu = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 10px;

    @media (max-width: 768px) {
        opacity: ${({ show }) => show ? "1" : "0"};
        visibility: ${({show}) => show ? "visible" : "hidden" };
        background-color: orange;
        margin-top: 0;
        width: 100%;
        height: 80vh;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
`;

export const NavItem = styled.li`
    display: flex;
    justify-content: center;
   
`;

export const NavLinks = styled(NavLink)`
    color: #000958;
    text-decoration: none;

    @media (max-width: 768px) {
        color: white;
    }
`;
export const MenuMobile = styled.div`
`;
export const MenuBars = styled(FaBars)`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        color: #000958;
        justify-self: flex-end;
        align-self: center;
        margin: 15px;
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
        z-index: 50;
    }
`;

export const MenuClose = styled(FaTimes)`
        display: none;

        @media (max-width: 768px) {
            display: flex;
            color: white;
            justify-self: flex-end;
            align-self: center;
            margin: 15px;
            font-size: 20px;
            position: absolute;
            right: 20px;
            top: 10px;
            cursor: pointer;
            z-index: 50;
        }
`;