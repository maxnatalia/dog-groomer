import styled from "styled-components";

export const Image = styled.img`
    width: 50%;
`;
export const Fieldset = styled.fieldset`
    padding: 20px;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 20px;

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const FieldName = styled.span`
    display: block;
    width: 30%;

    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`;

export const Input = styled.input`
    width: 70%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Textarea = styled.textarea`
    width: 70%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
`;