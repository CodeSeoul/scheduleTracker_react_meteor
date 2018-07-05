import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'
import { ScheduleContainer, Tablehead } from './ScheduleBoardStyle'

const ScheduleBoard = (props) => {

    console.log(props.database);
    const { employees, days, } = props

    const members = employees.map(employee => <Member key={employee.id} {...employee} />);
    const tableheads = days.map((day, index) => <Tablehead key={index}>{day.charAt(0).toUpperCase() + day.substr(1)}</Tablehead>)

    return (

        <ScheduleContainer>

            <Tablehead>Section</Tablehead>
            <Tablehead>Name</Tablehead>
            <Tablehead>Rank</Tablehead>
            {tableheads}
            {members}

        </ScheduleContainer>

    )
}

export default ScheduleBoard;