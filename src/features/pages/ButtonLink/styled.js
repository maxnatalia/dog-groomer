import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButtonLink = styled(Link)`
    display: block;
    padding: 10px 16px;
    margin: 20px;
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    border-radius: 5px;
    background-color:${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.third};
    box-shadow: ${({ theme }) => theme.shadows.light};
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 767px) {
        font-size: 18px;
        margin: 10px;
    }
`;