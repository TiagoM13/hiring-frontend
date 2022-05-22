import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-1: #F1C40F;
    --background-2: #FDFEFE;
    --background-3: #E5E8E8;
    --background-4: #FDFEFE;
    --text-light: #F8F9F9;
    --text-black: #17202A;
    --text-grey: #566573;
    --text-green: #58D68D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 83.5%;
    }
  }

  button {
    cursor: pointer;
  }
`;