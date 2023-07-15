import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    position: sticky;
    top: 0;
    left:0;
    z-index: 100;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({ show }) => show ? "100vh" : "auto"};

    @media (max-width: 767px) {
        align-items: start;
        flex-direction: column;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    flex: 1;
    display: flex;
    justify-content: space-around;

    @media (max-width: 767px) {
        opacity: ${({ show }) => show ? "1" : "0"};
        visibility: ${({ show }) => show ? "visible" : "hidden"};
        background-color: ${({ theme }) => theme.colors.secondary};
        margin-top: 0;
        width: 100%;
        display: ${({ show }) => show ? "flex" : "none"};
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`;

export const Link = styled(NavLink)`
    padding: 5px 10px;
    text-decoration: none;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;

    &:hover {
        font-weight: 600;
        border-radius: 5px;
        box-shadow: ${({ theme }) => theme.shadows.light};
    }

    &.active {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
        box-shadow: ${({ theme }) => theme.shadows.light};
    }
`;

export const MobileBox = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        font-size: 30px;
        margin: 10px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 0;
    }
`;