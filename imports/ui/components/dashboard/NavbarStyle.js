import styled from 'styled-components';


const NavSubMenuItem = styled.li`
  background:#fff;
  color: #14213d;
  &:hover{
    background:rgba(#000,0.1);
}
`;

const NavSubMenu = styled.ul`
  font-weight: 300;
  text-transform:none;
  display:none;
  position:absolute;
  width:auto;
  background-color: #14213d;
`;

const Nav = styled.nav`
  width:auto;
  height:auto;
  float:right;
  margin-top: 20px;
  margin-right: 25px;
  ul{
    list-style: none;
    padding-left: 0;
    margin-top:0;
    margin-bottom: 0;
    display: inline-block;
    margin: 2rem auto 0;
    background: transparent;
    color: #fff;
    text-align: left;
  }
  a{
    display:block;
    padding: 0 16px;
    line-height:inherit;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  font-weight : 700;
  text-transform : uppercase;
`;

const NavMenuItem = styled.li`
  display : inline-block;
  position:relative;
  &:hover {
    color: #fca311;
    ${NavSubMenu}{
      display:block;
    }
  }
`;


export { Nav, NavMenu, NavMenuItem, NavSubMenu, NavSubMenuItem } ;