import styled, { css } from "styled-components";

export const BoxGallery = styled.div`
    margin-top: 40px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
`;

export const Item = styled.div`

    ${({ one }) => one && css`
        grid-row: 1 / span 2;
        grid-column: 1 / span 4;
    `}

    ${({ two }) => two && css`
        grid-row: 1 / span 2;
        grid-column: 5 / span 2;
    `}

     ${({ three }) => three && css`
        grid-row: 3 / span 2;
        grid-column: 1 / span 2;
    `}

    ${({ four }) => four && css`
        grid-row: 3 / span 3;
        grid-column: 3 / span 4;
    `}

    ${({ five }) => five && css`
        grid-row: 5 / span 2;
        grid-column: 1 / span 2;
    `}

    ${({ six }) => six && css`
        grid-row: 6 / span 1;
        grid-column: 6 / -1;
    `}

    ${({ seven }) => seven && css`
        grid-row: 6 / span 1;
        grid-column: 3 / span 3;
    `}
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;