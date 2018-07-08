import React from 'react';
import styled from 'styled-components';
import '../../../../client/main.css';
import { Navbar, WeekButton, GeneralButton, Header, DashboardWrapper, ButtonWrapper } from './DashboardStyle';
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
      <DashboardWrapper>
        <ModalContainer
          showModal={this.state.showModal}
          toggleModalHandler={this.toggleModalHandler}
          modal={this.state.modal}
        />

        <Header>
          Schedule Tracker
        </Header>

      <ButtonWrapper>
          <GeneralButton onClick={() => this.toggleModalHandler('week')}>
            Week 1
          </GeneralButton>

          <GeneralButton onClick={() => this.toggleModalHandler('dashboard')}>
            Dashboard
          </GeneralButton>

          <GeneralButton onClick={() => this.toggleModalHandler('login')}>
            Log in
          </GeneralButton>
        </ButtonWrapper>
      </DashboardWrapper>
    );
  }
}

export default Dashboard;
