import styled from 'styled-components'

const Wrapper = styled.main`
nav {
  width: 100%;
  /* max-width: var(--max-width); */
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  background-color: var(--grey-100);
  box-shadow: 2px 2px 2px 2px #e5e5e5;
}
h3 {
    margin-top: 2.5rem;
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
.service-btn{
  margin-left: auto;
  margin-right: 8rem;
}
.logo-style{
  display: flex;
  align-items: center;
  margin-left: 8rem;
}
`
export default Wrapper
