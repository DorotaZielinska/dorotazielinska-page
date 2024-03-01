import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after,
 ::before {
  box-sizing: inherit;
}

body {
    background-color: ${({ theme }) => theme.primary.background};
    font-family: 'Lato', sans-serif;
    word-break: break-word;
    overflow: scroll;
    /* scroll-snap-type: y mandatory; */
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.primary.text}; 
}
`;