import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    max-width: 600px;
    padding: 20px;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1200px) {
       flex-direction: column;
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 20px;
    align-content: center;
    justify-content: center;

    @media (max-width: 1200px) {
       width: 80%;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    z-index: 8;
    outline-offset: 10px;
    box-shadow: ${({ theme }) => theme.shadows.light};
    border-radius: 2px;
    transition: all .2s;
    cursor: pointer;

    ${({ photoOne }) => photoOne && css`
       grid-column: 1 / span 2;
       grid-row: 1 / span 3;
    `}

    ${({ photoTwo }) => photoTwo && css`
        grid-column: 2 / span 2;
        grid-row:  3 / span 3;
    `}

    ${({ photoThree }) => photoThree && css`
        grid-column: 3 / span 2;
        grid-row:  2 / span 3;
    `}

    &:hover {
        outline: 10px solid ${({ theme }) => theme.colors.medium};
        transform: scale(1.05) translateY(-5px);
        box-shadow: ${({ theme }) => theme.shadows.dark};
        z-index: 9;
    }

    &:not(:hover) {
        opacity: .7;
        transform: scale(.90);
    }
`;

export const Summary = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const SummaryBox = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
`;

export const Name = styled.span`
    font-weight: 600;
    padding: 20px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.light};;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: -30%;
    right: 0;
    z-index: 10;

    @media (max-width: 767px) {
        padding: 10px;
    }
`;

export const Icon = styled.span`
    font-size: 40px;

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const Number = styled.span`
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;