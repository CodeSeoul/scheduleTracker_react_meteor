import React from 'react';
import { Meteor } from 'meteor/meteor';
import styled from 'styled-components';
import '../../../../client/main.css';
import Navbar from './DashboardStyle';
import ModalContainer from '../helpers/Modals/ModalContainer';

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
`;

class Dashboard extends React.Component {
  state = {
    showModal: false,
    modal: ''
  };

  toggleModalHandler = type => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modal: type
    }));
  };

  render() {
    return (
      <div>
        <ModalContainer
          showModal={this.state.showModal}
          toggleModalHandler={this.toggleModalHandler}
          modal={this.state.modal}
        />

        <WeekButton onClick={() => this.toggleModalHandler('week')}>
          Week 1
        </WeekButton>

        <GeneralButton onClick={() => this.toggleModalHandler('dashboard')}>
          Dashboard
        </GeneralButton>
        {!Meteor.userId() ? (
          <GeneralButton onClick={() => this.toggleModalHandler('login')}>
            Log in
          </GeneralButton>
        ) : (
          <GeneralButton
            onClick={() => {
              Meteor.logout();
            }}
          >
            Log Out
          </GeneralButton>
        )}
      </div>
    );
  }
}

export default Dashboard;
