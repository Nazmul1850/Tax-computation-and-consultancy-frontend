import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);


  .search {
      width: 50%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;
      margin-bottom: 2rem;
  }

  .qa-box-updated {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .qa-question {

  }
  .qa-answer {

  }

`

export default Wrapper;