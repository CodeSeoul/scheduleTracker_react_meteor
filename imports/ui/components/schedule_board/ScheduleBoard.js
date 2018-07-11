import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'
import { ScheduleContainer, Tablehead } from '../../styles/ScheduleBoardStyle'

const sortEmployees = (employees, key, order) => {
  employees.sort((a,b)=>{
    if(key == 'name')
      return a['firstName'].localeCompare(b['firstName']) * order
    else if(key == 'section')
      return (a['section'] - b['section']) * order;
    else
      return (a['rank'] - b['rank']) * order;
  })
}

class ScheduleBoard extends React.Component {

  state = {
    employees: [],
    sort: {
      key: 'name',
      order: 1
    },
    days: []
  }

  static getDerivedStateFromProps(nextProps, state) {
    let nextEmployees = nextProps.employees;
    if(state.employees != nextEmployees)
      sortEmployees(nextEmployees, state.sort.key, state.sort.order);
    return { employees: nextEmployees, days: nextProps.days };
  }

  handleSort = (event) => {
    const classes = event.currentTarget.classList;
    const sortKeys = /section|name|rank/;
    let employees = this.state.employees;
    let { key, order } = {...this.state.sort};
    if(classes.contains(key))
      order = -order;
    else
      key = classes.value.match(sortKeys)[0];
    sortEmployees(employees, key, order);
    this.setState({employees, sort:{key, order}});
  }

  render = () => {
    const members = this.state.employees.map(employee => <Member ScheduleChangeHandler={(event, id, day)=>ScheduleBoardHandler(event, id, day)} Section = {this.props.section} Rank={this.props.rank} {...this.props} key={employee.id} {...employee} />);
    const tableheads = this.state.days.map((day, index) => <Tablehead key={index}>{day.charAt(0).toUpperCase() + day.substr(1)}</Tablehead>)

    return (
      <ScheduleContainer>
        <Tablehead onClick={this.handleSort} className='section'>Section</Tablehead>
        <Tablehead onClick={this.handleSort} className='name'>Name</Tablehead>
        <Tablehead onClick={this.handleSort} className='rank'>Rank</Tablehead>
        {tableheads}
        {members}
      </ScheduleContainer>
    )
  }
}

export default ScheduleBoard;