import styled, { css } from "styled-components";

export const Section = styled.section`
    margin: 0 auto;
    max-width: 900px;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    /* margin-top: 20px; */
`;

export const Image = styled.img`
    display: block;
    margin: 20px auto;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const Fieldset = styled.fieldset`
    margin-top: 20px;
    background-color: beige;
    border: 2px solid rgb(254,173,22);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 4px 6px 5px gray;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const Span = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    margin-top: 5px;
    border-radius: 15px;
    border: 2px solid rgb(254,173,22);
    box-shadow: 1px 1px 2px gray;

    ${({ error }) => error && css`
        border: 4px solid crimson;
    `}
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    border: 2px solid rgb(254,173,22);
    box-shadow: 1px 1px 2px gray;
`;

export const Button = styled.button`
    color: white;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: rgb(254,173,22);
    padding: 15px;
    margin: 20px;
    border-radius: 15px;
    border: 2px solid rgb(254,173,22);
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: rgb(254,173,22);
    }
`;

export const ModalContent = styled.h4`
    font-size: 40px;
    margin: 20px auto;
    letter-spacing: 1.7px;
    text-align: center;
    color: rgb(254,173,22);
    text-shadow: 4px 4px 6px gray;

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;

export const Label = styled.label`
    padding: 20px;
`;