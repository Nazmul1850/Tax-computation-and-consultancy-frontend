import styled from 'styled-components'

const Wrapper = styled.main`
  /* nav {
    width: var(--fluid-width);
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    background-color: var(--grey-100);
    box-shadow: 2px 2px 2px 2px #e5e5e5;
  } */
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 1rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  h3 {
    margin-top: 2.5rem;
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      box-shadow: 5px 5px 5px 5px #e5e5e5;
    }
  }
`
export default Wrapper
