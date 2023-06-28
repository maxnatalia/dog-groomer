import styled, { css } from "styled-components";

export const Section = styled.section`
    margin: 0 auto;
    padding: 40px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media (max-width: 767px) {
        padding: 20px;
    }

    ${({ header }) => header && css`
        flex-direction: row-reverse;
        justify-content: center;
        margin-top: 60px;

        @media (max-width: 767px) {
            flex-direction: column;
        }
    `}
`;

export const ImageDog = styled.img`
    width: 300px;
    border-radius: 50%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 6px solid rgb(254,173,22);
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
    background: rgb(254,173,22);
    color: white;
    border-color: transparent;
    font-size: 18px;
    border-radius: 50%;
    padding: 10px;
    transition: all 1s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 3px 2px gray;

    &:hover {
        color: #000958;
        border: 2px solid #000958;
        box-shadow: 1px 4px 2px gray;
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
    border: 4px solid rgb(254,173,22);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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