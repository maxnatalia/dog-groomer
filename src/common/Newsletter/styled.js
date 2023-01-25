import styled, { css } from "styled-components";

export const StyledNewsletter = styled.div`
    position: fixed;
    padding: 20px;
    background-color: rgb(254,173,22, 0.7);
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px 15px;
    border-radius: 15px;
    border: 2px solid rgb(254,173,22);
    background-color: rgb(254,173,22);
    color: white;
    font-weight: 600;
    font-size: 22px;
    margin-top: 20px;
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: rgb(254,173,22);
    }

    ${({ main }) => main && css`
        position: fixed;
        top: 0;
        left: 200px;
        border-radius: 50%;
        border: 2px solid #000958;
        color: #000958;
        z-index: 500;

        &:hover {
            background-color: #000958;
            color: rgb(254,173,22);
        }
    `}
`;

export const Container = styled.div`
    background-color: beige;
    padding: 20px;
    opacity: unset;
    border-radius: 15px;
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    border-radius: 15px;
    border: 2px solid rgb(254,173,22);

    ${({ error }) => error && css`
        border: 4px solid crimson;
    `}
`;