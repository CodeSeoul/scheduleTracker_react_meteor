import React from 'react';
import '../../../../client/main.css';
import { GeneralButton, Header, DashboardWrapper, ButtonWrapper } from './DashboardStyle';
import ModalContainer from '../helpers/Modals/ModalContainer';
import Navbar from './Navbar';
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
      
        <Navbar />

      {/* <ButtonWrapper>
          <GeneralButton onClick={() => this.toggleModalHandler('week')}>
            Week 1
          </GeneralButton>

          <GeneralButton onClick={() => this.toggleModalHandler('dashboard')}>
            Dashboard
          </GeneralButton>

          <GeneralButton onClick={() => this.toggleModalHandler('login')}>
            Log in
          </GeneralButton>
        </ButtonWrapper> */}
      </DashboardWrapper>
    );
  }
}

export default Dashboard;
