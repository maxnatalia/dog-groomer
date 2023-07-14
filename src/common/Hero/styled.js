import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledHero = styled.section`
    background-image: linear-gradient(
      rgba(232, 79, 119, 0.3),
      rgba(254, 232, 245, 0.5)
    ), ${({ backgroundImage }) => backgroundImage ? `url(${backgroundImage})` : "none"};
    background-size: cover;
    background-position: center;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ButtonsBox = styled(motion.div)`
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    gap: 10px;

    ${({ common }) => common && css`
        height: 40%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    `}
`;

export const MainTitle = styled.h1`
    margin: 0;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    word-break: break-word;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 40px;

    @media (max-width: 767px) {
        font-size: 26px;
        padding: 10px;
        margin: 0;
    }
`;

export const Letter = styled(motion.span)`
    /* display: block; */
`;