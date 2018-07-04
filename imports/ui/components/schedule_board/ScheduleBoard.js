import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'
import {ScheduleContainer, Tablehead} from './ScheduleBoardStyle'

const ScheduleBoard = (props)=>{

    console.log(props.database);

    const members = props.database.employees.map(employee=>{return <Member key={employee.id} employee={{...employee}}/>} );

    return(

    <ScheduleContainer>

        <Tablehead>Section</Tablehead>
        <Tablehead>Name</Tablehead>
        <Tablehead>Rank</Tablehead>
        <Tablehead>Mon</Tablehead>
        <Tablehead>Tue</Tablehead>
        <Tablehead>Wed</Tablehead>
        <Tablehead>Thur</Tablehead>
        <Tablehead>Fri</Tablehead>
        <Tablehead>Sat</Tablehead>
        <Tablehead>Sun</Tablehead>
        {members}

    </ScheduleContainer>

    )
}

export default ScheduleBoard;