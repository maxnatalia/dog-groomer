import styled, { css } from "styled-components";
import { MdOutlinePets } from "react-icons/md";

export const StyledTitle = styled.h2`
    margin: 0;
    font-size: 36px;
    letter-spacing: 2px;
    text-align: center;

    ${({ subtitle }) => subtitle && css`
        font-size: 28px;
    `}
`;

export const Wrapper = styled.div`
    padding:20px;
    position: relative;
`;

export const Icon = styled(MdOutlinePets)`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
`;

export const HorizontalLine = styled.hr`
    border: none;
    width: 75%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
`;