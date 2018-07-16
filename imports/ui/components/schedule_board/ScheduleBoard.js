import React from 'react';
import styled from 'styled-components';
import Member from '../Member/Member';
import { ScheduleContainer, Tablehead } from '../../styles/ScheduleBoardStyle';

const sortEmployees = (employees, key, order) => {
  employees.sort((a, b) => {
    if (key == 'name')
      return a.info['firstName'].localeCompare(b.info['firstName']) * order;
    else if (key == 'section')
      return (a.info['section'] - b.info['section']) * order;
    else return (a.info['rank'] - b.info['rank']) * order;
  });
};

class ScheduleBoard extends React.Component {
  state = {
    sort: {
      key: 'name',
      order: 1
    }
  };

  static getDerivedStateFromProps(nextProps, state) {
    let nextEmployees = nextProps.employees;
    if (state.employees != nextEmployees)
      sortEmployees(nextEmployees, state.sort.key, state.sort.order);
    return {
      employees: nextEmployees,
      days: nextProps.days,
      week: nextProps.week
    };
  }

  handleSort = event => {
    const classes = event.currentTarget.classList;
    const sortKeys = /section|name|rank/;
    let employees = this.props.employees;
    let { key, order } = { ...this.state.sort };
    if (classes.contains(key)) order = -order;
    else key = classes.value.match(sortKeys)[0];
    sortEmployees(employees, key, order);
    this.setState({ sort: { key, order } });
  };

  render = () => {
    //console.log('this.props, ScheduleBoard', this.props);
    const { employees, days, rank, section } = this.props;

    const members = employees.map(employee => (
      <Member
        Section={section}
        Rank={rank}
        {...this.props}
        key={employee._id}
        {...employee}
      />
    ));
    const tableheads = days.map((day, index) => (
      <Tablehead key={index}>
        {day.charAt(0).toUpperCase() + day.substr(1)}
      </Tablehead>
    ));

    return (
      <ScheduleContainer>
        <Tablehead onClick={this.handleSort} className="section">
          Section
        </Tablehead>
        <Tablehead onClick={this.handleSort} className="name">
          Name
        </Tablehead>
        <Tablehead onClick={this.handleSort} className="rank">
          Rank
        </Tablehead>
        {tableheads}
        {members}
      </ScheduleContainer>
    );
  };
}

export default ScheduleBoard;
