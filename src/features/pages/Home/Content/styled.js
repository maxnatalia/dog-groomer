import styled, { css } from "styled-components";
import { MdPets } from "react-icons/md";

export const StyledContent = styled.article`
    padding: 40px 20px;
    min-height: 80vh;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconPet = styled(MdPets)`
    font-size: 50px;

    ${({ reverse }) => reverse && css`
        transform: rotate(180deg);
    `}

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const Wrapper = styled.div`
    max-width: 600px;
    padding: 20px;
    text-align: center;
`;

export const Info = styled.p`
    font-size: 26px;
    letter-spacing: 2px;

    @media (max-width: 767px) {
        font-size: 18px;
    }
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