import styled from 'styled-components'

const DashboardWrapper= styled.div`
    width: 100%;
    height:auto;
    position:fixed;
    top:0;
    left:0;
    text-align: justify; 
    background: linear-gradient(
    to bottom,
    rgba(20, 33, 61, 1),
    rgba(41, 53, 78, 0.95)
  );
`;


const Header = styled.div`
  font-size: 40px;
  width:auto;
  height:auto;
  color: #ffffff;
  float:left;
  font-family: 'Galada', cursive;
  margin-left:25px;
  margin-top:10px;
  padding:0;
  &:hover{
    color: #fca311;
  }
`;


export {Header, DashboardWrapper};