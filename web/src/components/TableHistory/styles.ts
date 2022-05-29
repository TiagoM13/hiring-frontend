import styled from "styled-components"

export const Container = styled.div`
  background: var(--background-2);
  width: 100%;
  max-width: 1170px;
  margin: 1rem auto;
  padding: 1rem;

  border-radius: 0.25rem;
  -webkit-box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3); 
  box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3);

  h2 {
    color: var(--text-black);
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding-bottom: 1rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      color: var(--text-grey);
      text-align: left;
      font-weight: 600;
      line-height: 1.5rem;
      padding: 0.5rem 1rem;
    }
    
    td {
      background: var(--background-3);
      color: var(--text-grey);
      padding: 0.5rem 1rem;
      border: 0;
    }
  }
`;