import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.third};
    letter-spacing: 1.8px;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.third};
    box-shadow: ${({ theme }) => theme.shadows.light};
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.third};
        color: ${({ theme }) => theme.colors.dark};
        font-weight: 600;
    }

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const Icon = styled.span`
    display: flex;
    padding: 5px;
`;

export const Text = styled.span`
    display: flex;
    text-transform: capitalize;
`;