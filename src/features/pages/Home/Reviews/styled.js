import styled, { css } from "styled-components";
import { FaQuoteRight } from 'react-icons/fa';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

export const Box = styled.div`
    margin-top: 20px;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 767px) {
        justify-content: end;
        align-items: center;
    }
`;

export const ButtonsBox = styled.div`
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 5;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 767px) {
        margin-right: 5px;
        font-size: 30px;
    }
`;

export const Prev = styled(FaArrowCircleDown)`
    cursor: pointer;
    transition: all 1s ease-in-out;

    &:hover {
        transform: rotate(90deg);
    }
`;

export const Next = styled(FaArrowCircleUp)`
    cursor: pointer;
    transition: all 1s ease-in-out;

    &:hover {
        transform: rotate(90deg);
    }
`;

export const Review = styled.div`
    max-width: 50%;
    max-height: 100%;
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
    padding: 10px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};
    opacity: 0;
    position: absolute;
    top: 150px;
    left: 100px;
    transform: translateX(0);
    transition: all 1s ease-in-out;

    @media (max-width: 767px) {
        max-width: 80%;
        left: 10px;
    }

    ${({ activeSlide }) => activeSlide && css`
        opacity: 1;
        color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};
        z-index: 5;
    `}

    ${({ prevSlide }) => prevSlide && css`
        opacity: 0.5;
        top: 0;
        left: 40px;
    `}

    ${({ nextSlide }) => nextSlide && css`
        opacity: 0.5;
        top: 250px;
        left: 40px;
    `}
`;

export const Blockquote = styled.blockquote`
    margin: 0;
`;

export const IconQuote = styled(FaQuoteRight)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 10px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const BoxLinks = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;