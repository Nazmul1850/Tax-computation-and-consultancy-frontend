import styled from 'styled-components'

const Wrapper = styled.main`
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