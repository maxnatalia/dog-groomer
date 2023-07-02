import styled from "styled-components";
import dogNew from "./dogNew.jpg";

export const StyledNewsletter = styled.article`
    height: 40vh;
    background-image:linear-gradient(
        rgba(254, 232, 245, 0.7),
        rgba(254, 232, 245, 0.3)
    ), url(${dogNew});
    background-repeat: no-repeat;
    background-position: center 36%;
    background-size: cover;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const InputWrapper = styled.div`
    padding: 20px;
    height: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    width: 40%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.third};
    border: 2px solid ${({ theme }) => theme.colors.dark};
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.dark};

    @media (max-width: 767px) {
        font-size: 18px;
        width: 60%;
    }
`;