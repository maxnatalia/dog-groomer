import styled from "styled-components";
import background from "./background.jpg";

export const Header = styled.header`
    background-image: linear-gradient(
      rgba(232, 79, 119, 0.3),
      rgba(254, 232, 245, 0.5)
    ), url(${background});
    background-size: cover;
    background-position: left top;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ButtonsBox = styled.div`
    margin: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 40px;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    font-size: 36px;
    letter-spacing: 2.6px;

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;