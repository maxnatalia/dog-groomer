import styled, { css } from "styled-components";
import hero from "./bubbles.svg";

export const SectionHero = styled.section`
    width: 100%;
    height: 100vh;;
    background-image: url("${hero}");
    background-color: beige;
    padding: 30px;
`;

export const Container = styled.div`
    margin-top: 80px;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
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

    @media (max-width: 767px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const Img = styled.img`
    max-width: 40vw;
    margin-top: 20px;
    object-fit: cover;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
