import styled, { css } from "styled-components";
import { FaQuoteRight } from 'react-icons/fa';

export const Section = styled.section`
    width: 90vw;
    margin: 10rem auto 5rem auto;
    max-width: 1170px;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const ImageDog = styled.img`
    width: 300px;
    border-radius: 50%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 6px solid orange;
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
    background: orange;
    color: white;
    border-color: transparent;
    font-size: 18px;
    border-radius: 50%;
    padding: 10px;

    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        background: beige;
        color: orange;
        border: 2px solid orange;
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
    border: 4px solid orange;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const IconQuote = styled(FaQuoteRight)`
    font-size: 3rem;
    margin-top: 1rem;
    color: orange;
    z-index: -50;
`;

export const Article = styled.article`
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    z-index: -50;

    ${({ activeSlide }) => activeSlide && css`
        opacity: 1;
        transform: translateX(0);
    `}
`;