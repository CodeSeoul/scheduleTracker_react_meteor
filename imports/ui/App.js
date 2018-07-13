import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Employees from '../api/employees';
import ScheduleBoard from './components/schedule_board/ScheduleBoard';
import DashBoard from './components/dashboard/Dashboard';
// Context API

export const ScheduleContext = React.createContext();

class ScheduleContextProvider extends Component {
  render() {
    return (
      <ScheduleContext.Provider value="test">
        {this.props.children}
      </ScheduleContext.Provider>
    );
  }
}

// Schedule component - represents the whole Schedule
class App extends Component {
  state = {
    employees: [],
    days: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'],
    section: ['iOS', 'android', 'frontend', 'backend'],
    rank: ['Manager', 'Senior', 'Junior', 'Intern'],
    status: ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave']
  };
  static getDerivedStateFromProps(nextProps, state) {
    //console.log('nextProps', nextProps);
    return { ...state, employees: nextProps.users };
  }

  ScheduleChangeHandler = (event, id, day) => {
    event.preventDefault();
    const newEmployees = [...this.state.employees];
    newEmployees.forEach((employee, index) => {
      id === employee._id
        ? (newEmployees[index].info.schedule[0][day] = Number(
            event.target.value
          ))
        : null;
    });
    this.setState({
      employees: newEmployees
    });
  };

  render() {
    ///////////////////////////////////////////////////////////
    if (this.state.employees.length < 1) {
      return <p>...Loading</p>;
    }
    //console.log(this.state);
    return (
      <ScheduleContextProvider>
        <div>
          <header>
            <h1>Schedule Tracker</h1>
          </header>
          <div>
            <DashBoard />
            <ScheduleBoard
              scheduleChangeHandler={this.ScheduleChangeHandler}
              {...this.state}
            />
          </div>
        </div>
      </ScheduleContextProvider>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('allUsers');
  return {
    ready: Meteor.users.find({}).fetch().length > 0,
    users: Meteor.users.find({}).fetch()
  };
}, App);
