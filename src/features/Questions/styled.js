import styled from "styled-components";

export const Section = styled.section`
    max-width: 900px;
    margin: 0 auto;
    padding: 50px;
    text-align: center;
`;

export const Container = styled.div`
    margin-bottom: 20px;
`;

export const Button = styled.button`
    background-color: #dc952a;
    color: white;
    border-radius: 50%;
    padding: 10px;
    margin: 20px auto;
    cursor: pointer;
    border: 2px solid orange;
    transition: 1s ease-in-out;

    &:hover {
        border:2px solid orange;
        background-color: transparent;
        color: orange;
    }
`;