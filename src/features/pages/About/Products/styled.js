import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 1fr 1fr 10%;
    grid-template-rows: 30% 20% 1fr;
    padding: 20px;
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
    max-width: 100%;
    object-fit: cover;
    outline: 4px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;

    @media (max-width: 767px) {
        grid-column: 1 / span 4;
    }
`;

export const Box = styled.div`
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    outline: 4px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.third};

    @media (max-width: 767px) {
        grid-column: 2 / span 4;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ProductBox = styled.div`
    flex-basis: 340px;
    padding: 10px 20px;;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.dark};
    background: ${({ image }) => `linear-gradient(rgba(232, 233, 235, 0.9), rgba(254, 232, 245, 0.8)), url(${image})`};
    background-size: cover;
    background-position: center;
`;

export const Name = styled.h4`
    padding-bottom: 10px;;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-size: 20px;
    letter-spacing: 2.8px;
`;