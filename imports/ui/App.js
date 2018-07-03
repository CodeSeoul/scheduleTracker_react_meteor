import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Employees from '../api/employees';
import ScheduleBoard from './components/schedule_board/ScheduleBoard'
import DashBoard from './components/dashboard/Dashboard'

// App component - represents the whole app
class App extends Component {
  state = {
    employees: [],
    days: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'],
    section: ['iOS', 'android', 'frontend', 'backend'],
    rank: ['Manager', 'Senior', 'Junior', 'Intern'],
    status: ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave']
  };
  static getDerivedStateFromProps(nextProps, state) {
    return { ...state, employees: nextProps.employees };
  }
  render() {
    while (this.state.employees.length === 0) {
      return null;
    }
    ////////////////////////////////////////////////////////////
    //This is how data for employees could be pulled
    let employee1 = this.state.employees[0];
    let employee1_rank = this.state.rank[employee1.rank];
    let employee1_section = this.state.section[employee1.section];
    console.log('employee1', employee1);
    console.log('employee1_rank', employee1_rank);
    console.log('employee1_section', employee1_section);

    let employee1_week1 = employee1.schedule[0];
    let employee1_week1_Mon = employee1_week1[0];
    console.log('employee1_week1', employee1_week1);
    console.log(
      'employee1_week1_Mon_status',
      this.state.status[employee1_week1_Mon]
    );

    ///////////////////////////////////////////////////////////
    return (
      <div>
        <header>
          <h1>Schedule Tracker</h1>
        </header>
        <div className="App">{/* DashBoard
      Schedule */}
          <DashBoard/>
          <ScheduleBoard/>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('employees');
  return { employees: Employees.find({}).fetch() };
}, App);
