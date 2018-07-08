import styled from 'styled-components';

const ScheduleContainer = styled.div`
    
display : grid;
grid-template-columns: repeat(10, 1fr);
justify-items : center;
align-items : center;
background-color : #eee;
grid-auto-rows : minmax(50px, auto);
margin : 5rem 1rem;
`

const Tablehead = styled.div`
`
export {ScheduleContainer,Tablehead}