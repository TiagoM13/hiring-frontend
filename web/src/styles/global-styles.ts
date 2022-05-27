import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-1: #F1C40F;
    --background-2: #FDFEFE;
    --background-3: #E5E8E8;
    --background-button: #28B463;
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

  body, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-filter {
    width: 100%;
    max-width: 400px;
    background-color: var(--background-2);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    input {
      display: block;
    }
  }

  .react-close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .button-submit {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--background-button);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;