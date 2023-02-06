import styled, { css } from "styled-components";

export const Section = styled.section`
    margin: 0 auto;
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin-top: 20px;

    @media (max-width: 767px) {
        padding: 40px;
    }
`;

export const Category = styled.div`
    padding: 20px;
    cursor: pointer;
    transition: 1s ease-in-out;
    border: .2px solid transparent;
    border-bottom: 2px solid rgb(254,173,22);

    &:hover {
        transform: scale(1.1);
        border: .2px solid rgb(254,173,22);
        border-bottom: 6px solid rgb(254,173,22);
        text-shadow: 4px 4px 6px rgb(254,173,22);
        box-shadow: 4px 4px 6px rgb(254,173,22);
    }

    ${({ activeDog }) => activeDog && css`
        transform: scale(1.1);
        border-bottom: 6px solid rgb(254,173,22);
    `}
`;

export const Image = styled.img`
    width: 70%;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CategoryName = styled.h3`
    font-size: 30px;

    ${({ activeDog }) => activeDog && css`
        text-shadow: 4px 4px 6px rgb(254,173,22);
    `}
`;

export const CategoryWeight = styled.p`
    font-size: 20px;

    ${({ activeDog }) => activeDog && css`
        text-shadow: 4px 4px 6px rgb(254,173,22);
    `}
`;