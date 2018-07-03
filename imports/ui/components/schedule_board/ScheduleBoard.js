import React from 'react';
import styled from 'styled-components'

const ScheduleBoard = (props)=>{

    const ScheduleContainer = styled.div`
    
    display : grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items : stretch;
    align-items : center;
    background-color : #eee;

    `

    return(

    <ScheduleContainer>
        
    </ScheduleContainer>

    )
}

export default ScheduleBoard;