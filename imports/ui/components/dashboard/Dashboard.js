import React from 'react';
import styled from 'styled-components';
import '../../../../client/main.css';
import { Navbar, WeekButton, GeneralButton } from './DashboardStyle';
import ModalContainer from '../helpers/Modals/ModalContainer';

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
        <GeneralButton onClick={() => this.toggleModalHandler('login')}>
          Log in
        </GeneralButton>
      </div>
    );
  }
}

export default Dashboard;
