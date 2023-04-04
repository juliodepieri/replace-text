import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.backgroundDarker};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  body, html {
    height: 100%;
  }

  #root {
    margin: 0 auto;
    height: 100%;

    /* tooltip style */
    --rt-color-white: ${(props) => props.theme.inputText};
    --rt-color-dark: ${(props) => props.theme.backgroundDarker};
    --rt-color-success: ${(props) => props.theme.success};
    --rt-color-error: ${(props) => props.theme.error};
    --rt-color-warning: ${(props) => props.theme.warning};
    --rt-color-info: ${(props) => props.theme.info};
    --rt-opacity: 0.9;
  }

`;

export default GlobalStyle;
