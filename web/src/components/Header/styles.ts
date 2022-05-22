import styled from "styled-components"

export const Container = styled.header`
  background: #435;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 1.5rem;
  }

  button {
    background: #fff;
    padding: 0.25rem;
    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;