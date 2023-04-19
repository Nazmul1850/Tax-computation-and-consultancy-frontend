import styled from 'styled-components'

const Wrapper = styled.section`
border-radius: var(--borderRadius);
width: 100%;
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

.container-house {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
}

`

export default Wrapper
