import React from 'react';
import {
  Nav,
  NavMenu,
  NavMenuItem,
  NavSubMenu,
  NavSubMenuItem
} from '../../styles/NavbarStyle';
import { Link, withRouter } from 'react-router-dom';
import IsAdmin from '../helpers/IsAdmin';

const SubMenu = ({ handleWeekSelect }) => {
  let weeks = Array.from(new Array(52), (val, index) => index + 1);
  const NavSubMenuItems = weeks.map(week => (
    <NavSubMenuItem
      key={week.toString()}
      onClick={() => handleWeekSelect(week)}
    >
      Week {week}
    </NavSubMenuItem>
  ));
  return <NavSubMenu>{NavSubMenuItems}</NavSubMenu>;
};
class Navbar extends React.Component {
  state = {
    showItem: false,
    week: this.props.week
  };

  //To change the week on navbar when user selects week in calendar
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.week != state.week){
      state.week = nextProps.week;
    }
    return null;
  }

  handleHover = () => {
    this.setState({ showItem: true });
  };
  handleLeave = () => {
    this.setState({ showItem: false });
  };

  handleWeekSelect = selected => {
    this.setState({ week: selected, showItem: false });
    this.props.handleWeekChange(selected);
  };
  handleLogout = () => {
    this.props.history.push('/login');
    Meteor.logout();
  };

  render() {
    //console.log('this.props, navBar', this.props);
    return (
      <Nav>
        <NavMenu>
          <NavMenuItem onMouseLeave={this.handleLeave}>
            <a onClick={() => this.props.toggleModalHandler('week')}
               onMouseEnter={this.handleHover}>
               Week {this.state.week}
            </a>
            {this.state.showItem && (
              <SubMenu handleWeekSelect={this.handleWeekSelect} />
            )}
          </NavMenuItem>

          <NavMenuItem>
            <a onClick={() => this.props.toggleModalHandler('dashboard')}>
              Dashboard
            </a>
          </NavMenuItem>

          {Meteor.userId() ? (
            <NavMenuItem onClick={this.handleLogout}>Log Out</NavMenuItem>
          ) : (
            <NavMenuItem>
              <Link to="/login">Login</Link>
            </NavMenuItem>
          )}

          <IsAdmin>
            <NavMenuItem>
              <Link to="/admin">Admin</Link>
            </NavMenuItem>
          </IsAdmin>
        </NavMenu>
      </Nav>
    );
  }
}

export default withRouter(Navbar);
