import styled from 'styled-components'

const Wrapper = styled.main`
.quiz-container{
  background-color: var(--primary-50);     
  border-radius: 10px;
  box-shadow: 0 0 10px 2px var(--grey-300);
  /* box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1); */
  width: 100%;
  overflow: hidden;
}
.quiz-header{
  padding: 4rem;
}
h2{
  padding: 1rem;
  text-align: center;
  margin: 0;
}

ul{
  list-style-type: none;
  padding: 0;
}
ul li{
  font-size: 1.2rem;
  margin: 1rem 0;
}
ul li label{
  cursor: pointer;
}
`

export default Wrapper