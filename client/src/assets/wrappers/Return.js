import styled from 'styled-components'

const Wrapper = styled.main`
    border-radius: var(--borderRadius);
    width: 100%;
    background: var(--white);
    padding: 3rem 2rem 4rem;
    box-shadow: var(--shadow-2);
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table-hover{
    transform: scale(1.1);
}
h3{
    text-align: center;
    text-shadow:#009879;
    color: var(--primary-500);
}


.styled-table thead tr {
    background: var(--primary-50);
    text-align: left;
}
/* tr:hover {
    background-color: var(--primary-500);
} */
.tables-return {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}


.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}



.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
`

export default Wrapper