import styled from 'styled-components';

const ScheduleContainer = styled.div`
    
display : grid;
grid-template-columns: repeat(11, 1fr);
justify-items : center;
align-items : center;
background-color : #eee;
grid-auto-rows : minmax(50px, auto);
margin : 1rem;
`

const Search = styled.input`
width : 15rem;
height : 1.5rem;
margin : 2rem 0 0.01rem 1rem;

`

const Tablehead = styled.div`
`
export { ScheduleContainer, Tablehead, Search }