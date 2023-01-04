import styled, { css } from "styled-components";
import { FaQuoteRight } from 'react-icons/fa';

export const Section = styled.section`
    width: 90vw;
    margin: 10rem auto;
    max-width: 1170px;
`;

export const SectionCenter = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
`;

export const Button = styled.button`
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: grey;
    color: white;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        background: lightgrey;
    }

    ${({ left }) => left && css`
        left: 0;
    `}

    ${({ right }) => right && css`
        right: 0;
    `}
`;

export const Image = styled.img`
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid gray;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const IconQuote = styled(FaQuoteRight)`
    font-size: 3rem;
    margin-top: 1rem;
    color: orange;
`;

export const Article = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    ${({ activeSlide }) => activeSlide && css`
        opacity: 1;
        transform: translateX(0);
    `}
`;