import styled from "styled-components";

export const Form = styled.form`
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.colors.third};
    border: 2px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.dark};

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;