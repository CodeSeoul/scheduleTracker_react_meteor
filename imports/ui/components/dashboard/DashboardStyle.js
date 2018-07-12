import styled from 'styled-components'
import * as variables from '../../styles/variables'

const WeekButton = styled.button`
  background-color: #14213d;
  border: none;
  padding: 5px;
  border-radius: 5px;
  width:auto;
  height: auto;
  box-shadow: 0 -2px 5px 3px #697183 inset, 0 5px 5px rgba(3, 25, 41, 0.17),
    0 15px rgba(255, 255, 255, 0.25) inset;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: #e9e9e9;
  /* text-shadow: 2px 2px #818181; */
  cursor: pointer;
  &:hover {
    background-color: #3e4960;
    color: #fca311;
  }
  &:focus{
        outline: none;
    }
`;
const GeneralButton = styled.button`
  border: none;
  margin: 0 5px 0 5px;
  padding: 2px 7px 2px 7px;
  font-size: 20px;
  width: auto;
  height: auto;
  background: none;
  cursor: pointer;
  color: #ffffff;
  font-weight:700;
  &:hover {
    color: #fca311;
  }
  &:focus{
        outline: none;
    }
`;

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


const ButtonWrapper =styled.div`
  width:auto;
  height:auto;
  float:right;
  margin-top: 30px;
  margin-right: 25px;
`;

export { WeekButton, GeneralButton, Header, DashboardWrapper,ButtonWrapper} ;