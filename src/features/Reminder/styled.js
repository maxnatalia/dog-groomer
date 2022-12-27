import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1170px;
`;

export const Image = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
`;

export const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 90vw;
    padding: 20px 50px;
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    grid-gap: 20px;
    align-items: center;
`;

export const Button = styled.button`
    color: white;
    display: block;
    width: 100%;
    border-color: transparent;
    background: rgba(242, 138, 178, 0.8);
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    border-radius: 5px;
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
`;
