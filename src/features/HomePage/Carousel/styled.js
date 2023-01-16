import styled, { css } from "styled-components";

export const Section = styled.section`
    width: 100%;
`;

export const Button = styled.button`
    border-radius: 50%;
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: grey;
    color: white;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 15px;
    z-index: -50;
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

export const Container = styled.div`
    background-color: beige;
    z-index: -50;
    position: relative;
    overflow: hidden;
    padding: 100px;
    margin: 0 auto;
    
    &::after {
        content: "";
        width: 650px;
        height: 650px;
        background-color: #fcdd0030;
        position: absolute;
        border-radius: 50%;
        z-index: -20;
        top: -20px;
        right: -185px;
    }
`;


export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
`;


export const Img = styled.img`
    z-index: 100;
    height: auto;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const Title = styled.h1`
    font-size: 42px;
    color: blue;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Subtitle = styled.h2`
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 50px;
    max-width: 700px;
`;
