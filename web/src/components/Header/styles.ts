import styled from "styled-components"

export const Container = styled.header`
  background: #435;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 1.5rem;
  }

  div {
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    display: flex;
    justify-content: center;

    img {
      width: 45px;
      height: 45px;
    }
  }
`;