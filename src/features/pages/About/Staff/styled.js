import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        padding: 10px;
    }
`;

export const SectionCenter = styled.div`
    margin: 10px auto;
    min-height: 460px;
    width:80%;
    text-align: center;
    overflow: hidden;
    position: relative;
`;

export const Button = styled.button`
    width: 60px;
    height: 60px;
    margin: 10px;
    position: absolute;
    top: 200px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.third};
    background: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.light};
    transform: translateY(-50%);
    transition: all .5s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.medium};
    }

    ${({ left }) => left && css`
        left: 0;
    `}

    ${({ right }) => right && css`
        right: 0;
    `}
`;

export const Image = styled.img`
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const Article = styled.article`
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -50;
    opacity: 0;
    transition: all 0.3s linear;

    ${({ activeSlide }) => activeSlide && css`
        opacity: 1;
        transform: translateX(0);
    `}
`;