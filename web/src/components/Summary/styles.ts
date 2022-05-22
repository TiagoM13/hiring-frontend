import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2;
  padding: 1rem;

  div {
    background: #fff;
    border-radius: 0.25rem;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0.5rem;

    header { 
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 1rem;
      padding: 0.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      color: green;
    }
    }
  }
`;
