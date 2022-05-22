import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2;
  padding: 1rem;
  margin-top: -4rem;

  div {
    background: var(--background-4);
    color: var(--text-grey);
    margin: 0 0.5rem;
    border-radius: 0.5rem;

    -webkit-box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3); 
    box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3);

    header { 
      display: flex;
      flex-direction: column;
      margin: 1rem;
      padding: 0.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--text-green);
    }
    }
  }
`;
