import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --clr-primary: #0052CC;
    --clr-primary-drk: #003c97;
    --clr-secondary: #172B4D;
    --clr-mc-fanning: #42526E;
    --clr-primary-20: #A3C0EB;
    --clr-primary-40: #5C91DF;
    --clr-input-bg: #EAF1FD;
    --clr-line: #A2BADD;
    --clr-menu-bg: #EAF1FD;
    --clr-feature-bg: #BDD7FE;
    --clr-primary-alt: #4181E0;
    --clr-cta-bg: #f5f5f5;
    --clr-form-line: #899cbe;

    --clr-black: #000;
    --clr-white: #fff;

    --clr-menu: #94A4C0;
    --clr-menu-social-icon:  #A2BADD;
    --clr-primary-paragraph: #5B6B88;

    // Font Size
    --fs-xs: 1.2rem; // 12px
    --fs-s: 1.3rem; // 13px
    --fs-m: 1.4rem; // 14px
    --fs-l: 1.6rem; // 16px
    --fs-xl: 1.8rem; // 18px
    --fs-xxl: 2rem; // 20px

    --fs-h1: 9.6rem; // 96px
    --fs-h2: 6rem; // 60px
    --fs-h3: 4.8rem; // 48px
    --fs-h4: 3.4rem; // 34px
    --fs-h5: 2.4rem; // 24px
    --fs-h6: 2rem; // 20px

    // Line Height
    --lh-s: 1.34; // 16
    --lh-m: 1.143; // 16
    --lh-m2: 1.572; // 22
    --lh-l: 1.25; // 20
    --lh-xl: 1.45; // 26
    --lh-xxl: 1.60; // 32

    --lh-h1: 1; // 96
    --lh-h2: 1.34; // 80
    --lh-h3: 1.167; // 56
    --lh-h4: 1.30; // 44
    --lh-h5: 1.5; // 36
    --lh-h6: 1.6; // 32  

    // Font Weight
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 700;
  }


  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%; // 10px;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: var(--fw-regular);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #root, #__next {
    isolation: isolate;
  }

`;

export default GlobalStyles;
