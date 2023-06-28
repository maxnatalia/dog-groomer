import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    font-size: 22px;

    @media (max-width: 767px) {
        font-size: 18px;
    }

    ${({ hero }) => hero && css`
        font-size: 32px;
        font-weight: 600;
    `}

    ${({ special }) => special && css`
        font-weight: 900;
    `}
`;
