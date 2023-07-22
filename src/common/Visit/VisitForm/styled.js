import styled from "styled-components";

export const Form = styled.form`
   margin: 20px auto;
`;

export const Image = styled.img`
    width: 300px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
`;

export const Legend = styled.legend`
    padding: 40px 10px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 10px;
    min-width: 300px;

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const FieldName = styled.span`
    width: 200px;
    font-weight: 600;
    letter-spacing: 2.6px;

    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`;

export const Input = styled.input`
    width: 70%;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    transition: all 0.3s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        outline: none;
    }
`;

export const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    @media (max-width: 767px) {
        margin: 0;
        flex-direction: column;
    }
`;