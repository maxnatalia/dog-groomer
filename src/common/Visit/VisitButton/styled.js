import styled from "styled-components";
import { GiRotaryPhone } from "react-icons/gi";

export const StyledVisitButton = styled.button`
    margin: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Icon = styled(GiRotaryPhone)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 36px;
`;