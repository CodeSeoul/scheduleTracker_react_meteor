import styled from 'styled-components';

const NavSubMenuItem = styled.li`
  background: #fca311;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  width: 150px;
  height: auto;
  text-align: left;
  padding-left: 15px;
  text-transform: uppercase;
  &:hover {
    background: rgba(230, 149, 16, 0.9);
  }
`;

const NavSubMenu = styled.ul`
  font-weight: 300;
  text-transform: none;
  display: none;
  position: absolute;
  width: auto;
  height: 350px;
  overflow-y: scroll;
  background-color: #14213d;
`;

const Nav = styled.nav`
  width: auto;
  height: auto;
  float: right;
  margin-right: 20px;
  margin-top: 32px;
  background: transparent;
  color: #fff;
  text-align: left;
  font-family: 'Tahoma';
  font-size: 20px;

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 0 16px;
    line-height: inherit;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  line-height: 45px;
  font-weight: 700;
  text-transform: uppercase;
`;

const NavMenuItem = styled.li`
  display: inline-block;
  position: relative;
  width: auto;
  text-align: center;
  &:hover {
    background-color: #fca311;
    ${NavSubMenu} {
      display: block;
    }
  }
`;

export { Nav, NavMenu, NavMenuItem, NavSubMenu, NavSubMenuItem };
