import styled, { css } from "styled-components";
import hero from "./bubbles.svg";

export const SectionHero = styled.section`
    height: 100vh;
    background-image: url("${hero}");
    background-color: beige;
    padding: 20px;
`;

export const Container = styled.div`
    position: relative;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: all 0.3s linear;

    ${({ activeSlide }) => activeSlide && css`
        opacity: 1;
        transform: translateX(0);
    `}

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    max-width: 38vw;
    object-fit: cover;
    padding: 10px;

    @media (max-width: 767px) {
        max-width: 28vh;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    padding: 40px;
    max-width: 600px;
    justify-self: flex-end;

    @media (max-width: 767px) {
        justify-self: center;
        padding: 0;
    }
`;
