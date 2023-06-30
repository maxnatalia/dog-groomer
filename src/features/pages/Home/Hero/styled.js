import styled from "styled-components";
import background from "./background.jpg";

export const Header = styled.header`
    background-image: linear-gradient(
      rgba(232, 79, 119, 0.3),
      rgba(254, 232, 245, 0.5)
    ), url(${background});
    background-size: cover;
    background-position: left top;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ButtonsBox = styled.div`
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
`;