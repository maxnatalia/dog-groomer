import styled from "styled-components";

export const Section = styled.section`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`;

export const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 767px) {
        gap: 0
    }
    
`;

export const ImageWrapper = styled.div`

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