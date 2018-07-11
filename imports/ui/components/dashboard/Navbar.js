import React from 'react';
import {Nav, NavMenu, NavMenuItem, NavSubMenu, NavSubMenuItem} from './NavbarStyle';

class SubMenu extends React.Component{
    render(){
        return(
            <NavSubMenu>
                <NavSubMenuItem>
                    Week 1
                </NavSubMenuItem>
                <NavSubMenuItem>
                    Week 2
                </NavSubMenuItem>
                <NavSubMenuItem>
                    Week 3
                </NavSubMenuItem>    
            </NavSubMenu>
        )      
    }
}

class Navbar extends React.Component{
    state = {
        showItem: false
    };

    handleHover = ()=>{
        this.setState({showItem: true});
    };

    handleLeave = ()=>{
        this.setState({showItem: false});
    }
    
    render(){
        return(
        <Nav>
            <NavMenu>
                <NavMenuItem onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover}>Week 1</a>
                    { this.state.showItem && <SubMenu />}
                </NavMenuItem>
                
                <NavMenuItem>
                    <a>Dashboard</a>
                </NavMenuItem>

                <NavMenuItem>
                    <a>Log in</a>
                </NavMenuItem>

            </NavMenu>
      </Nav>
        )
    };
}





export default Navbar;