import styled from 'styled-components'
import * as variables from '../../styles/variables'

const Navbar = styled.div`

display : grid;
grid-template-columns : 1fr 10rem 1fr;
justify-items : center;
align-items : center;
border-bottom : ${variables.PrimaryColor} 0.5rem solid;

div{
    justify-self : start;
}

nav{
    justify-self : end;
  }
  
  nav ul{
    display : grid;
    grid-template-columns : repeat(3,minmax(100px,1fr));
    justify-items: center;
  }
  li{
    list-style :none;
  }
  a{
    text-decoration : none;
    color : black;
  }

`

const WeekButton = styled.button`
  background-color: #81baea;
  border: none;
  padding: 10px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0 -2px 5px 3px #659ac6 inset, 0 5px 5px rgba(3, 25, 41, 0.17),
    0 15px rgba(255, 255, 255, 0.25) inset;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: #fafdff;
  text-shadow: 2px 2px #818181;
  cursor: pointer;
  &:hover {
    background-color: #8dc0ec;
  }
  &:focus{
        outline: none;
    }
`;
const GeneralButton = styled.button`
  border: none;
  font-size: 20px;
  width: auto;
  height: auto;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #eff6fc;
  }
  &:focus{
        outline: none;
    }
`;


export { Navbar, WeekButton, GeneralButton } ;