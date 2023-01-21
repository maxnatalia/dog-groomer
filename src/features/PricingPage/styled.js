import styled, { css } from "styled-components";

export const Section = styled.section`
    margin: 100px auto;
    text-align: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

export const Category = styled.div`
    padding: 28px;
    cursor: pointer;
    transition: 1s ease-in-out;
    border-bottom: 2px solid orange;

    &:hover {
        transform: scale(1.1);
        border-bottom: 6px solid orange;
        text-shadow: 4px 4px 6px orange;
    }

    ${({ activeDog }) => activeDog && css`
        transform: scale(1.1);
        border-bottom: 6px solid orange;
    `}
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CategoryName = styled.h3`
    font-size: 30px;

    ${({ activeDog }) => activeDog && css`
        text-shadow: 4px 4px 6px orange;
    `}
`;

export const CategoryWeight = styled.p`
    font-size: 20px;

    ${({ activeDog }) => activeDog && css`
        text-shadow: 4px 4px 6px orange;
    `}
`;