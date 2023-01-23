import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
    background-color: ${({ colorNav }) => colorNav ? "orange" : "beige"};
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

export const LogoWrapper = styled(Link)`
    display: flex;
    padding-left: 10px;
    text-decoration: none;
    position: absolute;
    left: 0;
    top:0;
    color: #000958;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1.7px;
`;

export const Logo = styled.img`

`;

export const NaVMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;

    @media (max-width: 768px) {
        opacity: ${({ show }) => show ? "1" : "0"};
        visibility: ${({ show }) => show ? "visible" : "hidden"};
        background-color: orange;
        margin-top: 0;
        width: 100%;
        height: 80vh;
        display: ${({ show }) => show ? "grid" : "none"};
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
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #000958;
    }

    @media (max-width: 768px) {
        color: white;

        &:hover {
        border-bottom: 1px solid white;
        }
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
