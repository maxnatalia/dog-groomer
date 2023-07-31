import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

`;

export const Image = styled.img`
    margin: 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 50%;
    opacity: 0.5;
    box-shadow: ${({ theme }) => theme.shadows.light};

    @media (max-width: 767px) {
        margin: 0;
        width: 150px;
        height: 150px;
    }
`;