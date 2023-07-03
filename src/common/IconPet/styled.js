import styled, { css } from "styled-components";
import { MdPets } from "react-icons/md";

export const Icon = styled(MdPets)`
    font-size: 40px;
    color: ${({ pink, theme }) => (pink ? theme.colors.primary : theme.colors.dark)};

    ${({ reverse }) => reverse && css`
        transform: rotate(180deg);
    `}

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;