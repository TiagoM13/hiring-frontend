import styled from 'styled-components'

export const Container = styled.form`
  input {
    width: 100%;
    padding: 0 0.5rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e7ee;

    font-weight: 400;
    font-size: 0.8rem;
    margin-top: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    /* & + input:nth-child(2) {
      width: 50%;
    }

    & + input:nth-child(3) {
      width: 50%;
    } */

    & + input {
      margin-bottom: 1rem;
    }
}
`;