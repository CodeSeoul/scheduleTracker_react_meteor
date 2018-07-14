import React from 'react';
import {Nav, NavMenu, NavMenuItem, NavSubMenu, NavSubMenuItem} from '../../styles/NavbarStyle';

const SubMenu = ({handleWeekSelect}) =>{
    let weeks = Array.from(new Array(52),(val,index)=>index+1);
    const NavSubMenuItems = weeks.map((week) =>
        <NavSubMenuItem key={week.toString()} onClick={()=>handleWeekSelect(week)}>
           Week {week}
        </NavSubMenuItem>
    );
    return(
        <NavSubMenu>{NavSubMenuItems}</NavSubMenu>
    );
};
class Navbar extends React.Component{
    state= {
            showItem: false,
            week: this.props.week
    };
    
    handleHover = ()=>{
        this.setState({showItem: true});
    };

    handleLeave = ()=>{
        this.setState({showItem: false});
    };

    handleWeekSelect = (selected) =>{
        this.setState({week: selected});
        this.props.handleWeekChange(selected);
    }
    
    render(){
        return(
        <Nav>
            <NavMenu>
                <NavMenuItem onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover} 
                       onClick={()=>this.props.toggleModalHandler('week')}>
                       Week {this.state.week}</a>
                    { this.state.showItem && <SubMenu handleWeekSelect={this.handleWeekSelect} />}
                </NavMenuItem>
                
                <NavMenuItem>
                    <a onClick={()=>this.props.toggleModalHandler('dashboard')}>Dashboard</a>
                </NavMenuItem>

                <NavMenuItem>
                    <a onClick={()=>this.props.toggleModalHandler('login')}>Log in</a>
                </NavMenuItem>

            </NavMenu>
      </Nav>
        )
    };
}

export default Navbar;