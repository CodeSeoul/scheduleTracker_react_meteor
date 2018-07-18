import styled from 'styled-components';

const ModalMain = styled.section`
    position:fixed;
    background: white;
    width: auto;
    height: auto;
    padding: 20px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);  
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    z-index: 3 !important;
    text-align: center;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => props.toggle?'block':'none'};
    z-index: 2 !important;
`;

const CloseButton = styled.button`
    width:30px;
    height:30px;
    position:fixed;
    right:2px;
    top:2px;
    background-color:transparent;
    display: block;
    border: none;
    text-align:right;
    font-size: 20px ;
    color: #ababab;
    transform: scale(1.3,1);
    font-weight:500;
    z-index: 2 !important;
    &:focus{
        outline: none;
    }
`;
export {ModalMain, ModalWrapper,CloseButton};