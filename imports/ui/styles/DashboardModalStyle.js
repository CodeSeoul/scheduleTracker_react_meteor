import styled from 'styled-components'

const ModalTable = styled.table`
    border: 1px solid black;
    table-layout: fixed;
    width:100%;
    padding: 2px;
`

const TableData = styled.td`
    font-family: 'Tahoma';
    border:1px solid #dedede;
    padding: 5px;
    font-size: 1.5vw;
`

const TableHead = styled.th`
    font-family: 'Tahoma';
    color: #e5e5e5;
    border: 1px solid #dedede;
    background: #14213d;
    font-size: 1.5vw;
    padding: 5px;
    width: 12vw;
`

const ModalHeader = styled.h1`
    font-family: 'Galada', cursive;
    text-shadow: 5px 5px 2px #fca311;
    position: fixed;
    color: #e5e5e5;
    top:-30%;
    left:50%;
    transform: translate(-50%,-50%);  
    z-index: -1;
    font-size: 5vw;
`

export {ModalTable, TableData, TableHead, ModalHeader};