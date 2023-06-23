import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledLogo = styled.img`
    margin: 10px;
    width: 60px;
    height: 60px;
`;

export const Company = styled.span`
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 1.4px;
    padding: 10px;

    @media (max-width: 767px) {
        display: none;
    }
`;