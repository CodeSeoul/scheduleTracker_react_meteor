import React from 'react';
import styled from 'styled-components'
import Member from '../Member/Member'
import {ScheduleContainer, Tablehead} from './ScheduleBoardStyle'

const ScheduleBoard = (props)=>{

    console.log(props.database);

    const members = props.database.employees.map(employee=>{return <Member key={employee.id} employee={{...employee}}/>} );
    const tableheads = props.database.days.map((day,index) => { return <Tablehead key={index}>{day.charAt(0).toUpperCase()+day.substr(1)}</Tablehead>} )

    return(

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