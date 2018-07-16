import React from 'react';
import {
  Nav,
  NavMenu,
  NavMenuItem,
  NavSubMenu,
  NavSubMenuItem
} from '../../styles/NavbarStyle';
import { Link } from 'react-router-dom';

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
  handleLogout() {
    Meteor.logout();
  }
  render() {
    return (
      <Nav>
        <NavMenu>
          <NavMenuItem onMouseLeave={this.handleLeave}>
            <a onMouseEnter={this.handleHover}>Week {this.state.week}</a>
            {this.state.showItem && (
              <SubMenu handleWeekSelect={this.handleWeekSelect} />
            )}
          </NavMenuItem>

          <NavMenuItem>
            <a onClick={() => this.props.toggleModalHandler('dashboard')}>
              Dashboard
            </a>
          </NavMenuItem>

          <NavMenuItem onClick={this.handleLogout}>Log Out</NavMenuItem>

          <NavMenuItem>
            <Link to="/admin">Admin</Link>
          </NavMenuItem>
        </NavMenu>
      </Nav>
    );
  }
}

export default Navbar;
