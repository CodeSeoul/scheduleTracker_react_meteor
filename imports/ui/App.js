import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer, withTracker } from 'meteor/react-meteor-data';
import Employees from '../api/employees';
import ScheduleBoard from './components/schedule_board/ScheduleBoard';
import DashBoard from './components/dashboard/Dashboard';
import weekOfTheYear from '../api/weekOfTheYear';
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
    status: ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave'],
    week: weekOfTheYear()
  };
  static getDerivedStateFromProps(nextProps, state) {
    console.log('nextProps', nextProps);
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

  handleWeekChange = selected_week =>{
    event.preventDefault();
    this.setState({
      week : selected_week
    })
  }


  render() {
    ///////////////////////////////////////////////////////////
    if (this.props.loading) {
      return <p>...Loading</p>;
    }
    //console.log(this.state);
    //console.log(this.state.week);
    return (
      <ScheduleContextProvider>
        <div>
          <header>
            <h1>Schedule Tracker</h1>
          </header>
          <div>
            <DashBoard week={this.state.week} handleWeekChange={this.handleWeekChange}/>

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

export default (AppContainer = withTracker(() => {
  const userHandle = Meteor.subscribe('allUsers');
  const loading = !userHandle.ready();
  console.log('loading', loading);
  return {
    loading,
    users: Meteor.users.find({}).fetch()
  };
})(App));
