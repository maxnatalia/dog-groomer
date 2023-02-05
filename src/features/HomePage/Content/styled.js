import styled from "styled-components";

export const Section = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    max-width: 900px;
    padding: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 767px) {
        gap: 0;
        flex-direction: column;
    } 
`;

export const Img = styled.img`
    width: 22vw;
    object-fit: cover;
`;

export const ContentWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;