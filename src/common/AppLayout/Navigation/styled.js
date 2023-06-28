import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left:0;
    z-index: 100;
`;

export const List = styled.ul`
    list-style: none;
    flex: 1;
    display: flex;
    justify-content: space-around;

    @media (max-width: 767px) {
        display: none;
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