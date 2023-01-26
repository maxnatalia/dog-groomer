import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    text-decoration: inherit;
    background-color: #dc952a;
    color: white;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: 1px 2px 2px gray;
    transition: 1s ease-in-out;

    &:hover {
        filter: brightness(120%);
        box-shadow: 1px 5px 3px gray;
        color: #000958;
    }
`;
