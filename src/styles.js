import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme = {
  accent: '#0095f6',
  bgColor: '#FAFAFA',
  fontColor: 'rgb(38, 38, 38)',
  borderColor: 'rgb(219, 219, 219)',
};

export const darkTheme = {
  fontColor: 'white',
  bgColor: '#000',
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
    all: unset;
  }
  button:not([disabled]) {
    cursor: pointer;
  }
  * {
    box-sizing: border-box !important;
  }
  body {
      background-color: ${(props) => props.theme.bgColor};
      font-size: 14px;
      font-family: 'Open Sans', sans-serif;
      color: ${(props) => props.theme.fontColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .hidden {
    display: none !important;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;
