import styled from "styled-components"

export const Container = styled.header`
  background: var(--background-1);
  max-width: 100%;
  height: 150px;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    color: var(--text-light);
    font-size: 1.5rem;
    text-decoration: underline;
    text-shadow: 1px 1px 2px var(--text-black);
  }

  button {
    background: var(--background-3);
    padding: 0.25rem;
    border: 0.15rem solid var(--background-2);
    border-radius: 50%;
    width: 55px;
    height: 55px;

    transition: filter 0.7s ease-in;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      width: 40px;
      height: 40px;
      padding: 0.15rem;
    }
  }
`;