import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .title {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  .form-row {
    width: 100%;
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
