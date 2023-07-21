import styled from "styled-components";
import dogNew from "./dogNew.jpg";

export const StyledNewsletter = styled.section`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image:linear-gradient(
        rgba(254, 232, 245, 0.7),
        rgba(254, 232, 245, 0.3)
    ), url(${dogNew});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    position: relative;
`;


export const Box = styled.div`
    align-self: center;
    margin: 20px;
`;
