import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    display:flex;
    align-items: center;
    cursor: pointer;
    transition: all 1s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.dark};
    }
`;

export const StyledLogo = styled.img`
    margin: 10px;
    width: 60px;
    height: 60px;

    @media (max-width: 767px) {
        width: 40px;
        height: 40px;
    }
`;

export const Text = styled.span`
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
    text-align: center;

    @media (max-width: 767px) {
        display: none;
    }
`;