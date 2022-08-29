import styled from 'styled-components'

const Wrapper = styled.section`
border-radius: var(--borderRadius);
width: 100%;
padding: 0.5rem;
background: var(--white);
box-shadow: var(--shadow-2);
.notification-box {
    width:100%;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
}
.notification-body {
  width: 100%;
  text-align: center;
  background-color: var(--primary-100);
}

`

export default Wrapper
