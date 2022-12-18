import { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    border: 0;
  }

  html, body, #root {
    background-color: var(--background);
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}

ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

  code {
    font-family: 'Mulish', sans-serif;
  }

  a:link,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  /* Edge password eye button */
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  /* Chrome autofill background */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px var(--background) inset !important;
    /* -webkit-box-shadow: 0 0 0 30px var(--background) inset !important; */
  }

  /* Global classes */
  .border {
    background: linear-gradient(
      90deg,
      rgba(192, 204, 218, 0.1) 0%,
      rgba(192, 204, 218, 0.6) 50.38%,
      rgba(192, 204, 218, 0.1) 100%
    );
    height: 1px;
    width: 100% !important;
  }

  :root {
    /* PRIMARY */
    --theme-primary-50: #e0edf5;
    --theme-primary-100: #b3d3e6;
    --theme-primary-300: #4d99c4;
    --theme-primary-400: #2683b7;
    --theme-primary-500: #006daa;
    --theme-primary-600: #0065a3;
    --theme-primary-700: #005a99;
    --theme-primary-800: #005090;
    --theme-primary-900: #003e7f;

    --theme-primary: var(--theme-primary-500);

    /* PRIMARY ACCENT */
    --theme-primary-accent-100: #adceff;
    --theme-primary-accent-200: #7ab0ff;
    --theme-primary-accent-400: #4792ff;
    --theme-primary-accent-700: #2d83ff;
    --theme-secondary: #f7f7f7;
    --theme-secondary-50: #fce1f0;
    --theme-secondary-100: #f7b4d9;
    --theme-secondary-300: #f283c0;
    --theme-secondary-400: #e92b93;
    --theme-secondary-500: #e50680;
    --theme-secondary-600: #e20578;
    --theme-secondary-700: #de046d;
    --theme-secondary-800: #da0363;
    --theme-secondary-900: #d30250;

    /* SECONDARY ACCENT */
    --theme-secondary-accent-100: #fffbfc;
    --theme-secondary-accent-200: #ffc8d9;
    --theme-secondary-accent-400: #ff95b6;
    --theme-secondary-accent-700: #ff7ba4;

    /* STATES & BADGES */
    --theme-success: #4ea802;
    --theme-error: #d6103b;
    --theme-warning: #e36d00;
    --theme-info: #2d83ff;

    /* GREY */
    --theme-white: #fff;
    --theme-grey-50: #fafafa;
    --theme-grey-100: #f5f5f5;
    --theme-grey-300: #e0e0e0;
    --theme-grey-400: #bdbdbd;
    --theme-grey-500: #9e9e9e;
    --theme-grey-700: #424242;
    --theme-grey-800: #303030;
    --theme-grey-900: #212121;
    --theme-black: #000;

    /* FONTS */
    --fonts-high: rgba(var(--bg-dark-base), 0.8);
    --fonts-regular: rgba(var(--bg-dark-base), 0.6);
    --fonts-medium: rgba(0, 0, 0, 0.6);
    --fonts-low: rgba(var(--bg-dark-base), 0.44);
    --fonts-snow: var(--theme-white);
    --fonts-light: rgba(255, 255, 255, 0.6);
    --fonts-medium-gray: #666;
    --fonts-dark: #000826cc;
    --fonts-accent: #b07d4d;
    --fonts-dark-green: #00af7d;
    --fonts-dark-orange: var(--theme-warning);
    --fonts-primary: var(--theme-primary-500);
    --fonts-primary-dark: var(--theme-primary-900);
    --fonts-danger: var(--theme-error);
    --fonts-magenta: var(--theme-secondary-500);
    --fonts-green: var(--theme-green);
    --fonts-gray-ice: #888888;
    --fonts-disabled: rgba(0, 0, 0, 0.38);

    /* BACKGROUNDS */
    --bg-dark-high: rgba(0, 8, 38, 0.8);
    --bg-dark-regular: rgba(0, 8, 38, 0.6);
    --bg-dark-low: rgba(0, 8, 38, 0.44);
    --bg-dark-base: 0, 8, 38;
    --bg-light-grey: #f5f7f9;
    --bg-dark-grey: rgba(0, 8, 38, 0.6);
    --bg-grey: #d4dae0;
    --bg-light-blue: #e0edf5;
    --bg-dark-blue: var(--theme-primary-300);
    --pure-black: #000;
  }
`

// Transitions
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const slideDown = keyframes`
  from {
    transform: translate(0, -50px);
    opacity: 0;
  }

  to {
    transform: translate(0, 0px);
    opacity: 1;
  }
`

export const slideUp = keyframes`
  from {
    transform: translate(0, 0px);
    opacity: 1;
  }

  to {
    transform: translate(0, -50px);
    opacity: 0;
  }
`
