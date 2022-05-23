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
    position: relative;
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

  .active {
    display: none;
  }
`;

export const ButtonDropdown = styled.div`
  position: absolute;
  background: var(--background-2);
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  right: 2rem;
  z-index: 1;

  border-radius: 0.35rem;

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    right: 20px;
    width: 16px;
    height: 16px;
    background: var(--background-2);
    transform: rotate(45deg);
  }

  ul {
    list-style: none;

    li {
      font-size: 0.9rem;
      font-weight: 500;
      text-align: right;
      padding: 0.25rem 0;
    }

    a {
      text-decoration: none;
      color: var(--text-black);
      transition: 0.7s ease-in;

      &:hover {
        color: var(--background-1);
      }
    }
  }
`;