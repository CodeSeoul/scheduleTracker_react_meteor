import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'
import { ScheduleContainer, Tablehead } from './ScheduleBoardStyle'

const ScheduleBoard = (props) => {

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
    return { employees: nextEmployees, days: nextProps.days };
  }

  handleSort = (event) => {
  }

  render = () => {
    const members = this.state.employees.map(employee => <Member key={employee.id} {...employee} />);
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