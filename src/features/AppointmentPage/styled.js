import styled from "styled-components";

export const Section = styled.section`
    margin: 0 auto;
    margin-top: 80px;
    max-width: 900px;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin-top: 20px;
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
    border: 2px solid orange;
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
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    margin-top: 5px;
    border-radius: 15px;
    border: 2px solid orange;
    box-shadow: 1px 1px 2px gray;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    border: 2px solid orange;
    box-shadow: 1px 1px 2px gray;
`;

export const Button = styled.button`
    color: white;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: orange;
    padding: 15px;
    border-radius: 15px;
    border: 2px solid orange;
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: orange;
    }
`;

export const ModalContent = styled.h4`
    font-size: 40px;
    margin: 20px auto;
    letter-spacing: 1.7px;
    text-align: center;
    color: orange;
    text-shadow: 4px 4px 6px gray;

    @media (max-width: 767px) {
        font-size: 30px;
    }
`;