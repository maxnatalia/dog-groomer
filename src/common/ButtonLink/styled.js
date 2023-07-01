import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButtonLink = styled(motion(Link))`
    display: block;
    padding: 10px 16px;
    margin: 20px;
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    border-radius: 5px;
    background-color:${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.third};
    box-shadow: ${({ theme }) => theme.shadows.light};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 767px) {
        font-size: 18px;
        margin: 10px;
    }
`;