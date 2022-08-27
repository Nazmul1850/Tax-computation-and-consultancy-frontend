import styled from 'styled-components'

const Wrapper = styled.main`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);

    .profile-info {

    }
    .profile-name {
        display: flex;
        justify-content: space-around;
    }
    .profile-item {
        display: flex;
        justify-content: left;
    }
    .info-links {
        display: flex;
        flex-wrap: wrap;
        /* flex-direction: row;
        justify-content: space-evenly; */
    }
    .law {
        margin: 0.5rem;
        flex: 2 0 21%;  
    }

`

export default Wrapper