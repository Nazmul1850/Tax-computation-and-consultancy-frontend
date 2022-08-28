import styled from 'styled-components'

const Wrapper = styled.main`
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
    .col-md-4 {
    margin-bottom: 30px;
    }

    .card {
    padding: 30px;
    border: solid 1px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    }
    .card:hover {
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.08);
    }
    .card-title {
    margin-top: 20px;
    }
    .card-text {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    }
    .card-text .fa {
    font-size: 26px;
    }
    .avatar {
    width: 140px;
    margin: auto;
    }
    .avatar img {
    border: solid 6px transparent;
    border-radius: 50%;
    }
    .card:hover .avatar img {
    border-color: rgb(99, 204, 131);
    }


`

export default Wrapper