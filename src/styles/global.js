import { createGlobalStyle } from "styled-components";

// padrão - cor fonte: grey 4 / font weigth dos h: 400 / font-size: 16 px ou 1 rem

export default createGlobalStyle`
:root {
    --color-background: #FFFFFF;
    --color-primary: #FD377E;
    --color-primary-2: #E34981;
    --color-secondary: #03B898;
    --color-grey-4: #212529;
    --color-grey-3: #868E96;
    --color-grey-2: #E9ECEF;
    --color-grey-1: #F8F9FA;
    --color-white: #FFFFFF;

    font-size: 60%;   
  }
  @media (min-width: 320px) {
    :root {
      font-size: 80.5%;
    }
  }
  
  * {
    font-family: 'Nunito';
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-grey-4);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Nunito';
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
  }

  img{
    max-width: 100%;
  }

  .container{
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.8rem;
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-1);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-4);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-4);
  }
`;
