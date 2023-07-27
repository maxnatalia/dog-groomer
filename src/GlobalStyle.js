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
        font-size: 18px;
        color: ${({ theme }) => theme.colors.dark};
        letter-spacing: 2px;
        line-height: 1.4;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
`;