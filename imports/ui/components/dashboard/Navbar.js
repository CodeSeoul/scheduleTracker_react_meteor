import React from 'react';
import {Nav, NavMenu, NavMenuItem, NavSubMenu, NavSubMenuItem} from '../../styles/NavbarStyle';

const weekOfTheYear = ()=>{
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
    return week;
}

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
    constructor(props){
        super(props);
        this.state= {
            showItem: false,
            week: weekOfTheYear()
        };
    }
    
    handleHover = ()=>{
        this.setState({showItem: true});
    };

    handleLeave = ()=>{
        this.setState({showItem: false});
    };

    handleWeekSelect = (selected) =>{
        this.setState({week: selected})
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