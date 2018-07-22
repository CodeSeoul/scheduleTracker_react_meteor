import React from 'react';
import '../../../../client/main.css';
import ModalContainer from '../helpers/Modals/ModalContainer';
import Navbar from './Navbar';
import { Header, DashboardWrapper } from '../../styles/DashboardStyle';

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
          handleWeekChange={this.props.handleWeekChange}
        />

        <Header>Schedule Tracker</Header>

        <Navbar
          toggleModalHandler={this.toggleModalHandler}
          week={this.props.week}
          handleWeekChange={this.props.handleWeekChange}
        />
      </DashboardWrapper>
    );
  }
}

export default Dashboard;
