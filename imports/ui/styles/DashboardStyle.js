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

export default Navbar;