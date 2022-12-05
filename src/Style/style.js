import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --brand1: #18B498;
        --brand2:#D72B4E;
        --brand3:#f1e6cd;
        --brand4:#0A2D42;
        --redError: #FF0000;
        --cleanBlack: #222222;
        --white: #FFFFFF;
        --purple: #9D4EDD;
        --black: #000000;
        --grey: #C4C4C4;
        --blackComment: #111111;
        --background:#FFECCB;
        --mainFont: "ITC Avant Garde Gothic", sans-serif;
        --blackOpsFont:'Black Ops One', cursive;
        --toastify-color-success: #9D4EDD;
        --toastify-color-error: #9D4EDD;
        --toastify-color-dark: #0A011B;
        --toastify-toast-min-height: 85px;
        --toastify-text-color-dark: #FFF;
        --toastify-font-family: 'Inter', sans-serif;
        --border: 2px solid #333333;
    }

    body, input, button {
        font-size: 1rem;
        font-weight: 400;
    }

    h1, h2, h3, h4 {
        font-weight: 700;
        font-family: var(--mainFont), 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    p {
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    figcaption {
        display: none;
    }

    ul{
        list-style: none;
    }

    .text-border {
        
  }

    body{
        background-color: var(--brand3);
        margin: 0;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.6;
    }
    ::-webkit-scrollbar {
        width: 8px;
        
    }
    ::-webkit-scrollbar-track {
        background: var(--brand4);
        
    }
    ::-webkit-scrollbar-thumb {
        background: var(--brand1); 
    }
    .App {
        text-align: center;
    }

    @font-face {
        font-family: 'ITC Avant Garde Gothic';
        src: local('ITC Avant Garde Gothic Md'), local('ITC-Avant-Garde-Gothic-Md'),
            url('ITCAvantGardeStd-Md.woff2') format('woff2'),
            url('ITCAvantGardeStd-Md.woff') format('woff'),
            url('ITCAvantGardeStd-Md.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
`;
