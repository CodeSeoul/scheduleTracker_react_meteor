import React from 'react';
import styled from 'styled-components'

const ScheduleBoard = (props)=>{

    const ScheduleContainer = styled.div`
    
    display : grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items : center;
    align-items : center;
    background-color : #eee;

    `

    const Tablehead = styled.div`
    `

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

    </ScheduleContainer>

    )
}

export default ScheduleBoard;