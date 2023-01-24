import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        margin: 0 auto;
        color: #000958;
    }
`;