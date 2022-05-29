import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2;
  padding: 1rem;
  margin-top: -4rem;

  div {
    background: var(--background-2);
    color: var(--text-grey);
    margin: 0 0.5rem;
    border-radius: 0.5rem;

    -webkit-box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3); 
    box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3);

    & + div {
      width: 800px;

      h2 {
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
      }
    }

    header { 
      display: flex;
      flex-direction: column;
      margin: 1rem;
      padding: 0.5rem;

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
      }

      strong {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-green);
      }

      p {
        font-size: 0.8rem;
        color: var(--text-grey);
        text-align: right;
        margin-top: 1.5rem;
      }
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0.8rem;

  div {
    background-color: var(--background-3);
    border-radius: 0.25rem;
    margin: 0 0.2rem;
    text-align: justify;
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: none;
  }
  

  ul {
    padding: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;

    li {
      color: rgba(0, 0, 0, 0.4);
      list-style: none;
      margin: 1rem 0;
    }

    & .prices {
        color: var(--text-green);
      }
  }   
`;