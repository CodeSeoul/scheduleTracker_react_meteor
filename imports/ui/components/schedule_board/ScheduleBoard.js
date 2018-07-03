import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'

const ScheduleBoard = (props)=>{

    const ScheduleContainer = styled.div`
    
    display : grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items : center;
    align-items : center;
    background-color : #eee;
    grid-auto-rows : minmax(50px, auto);

    `

    const Tablehead = styled.div`
    `
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