import styled from 'styled-components';

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ admin }) => {
    console.log('admin', admin);

    return admin ? 'repeat(11, 1fr)' : 'repeat(10, 1fr)';
  }};
  justify-items: center;
  align-items: center;
  background-color: #eee;
  grid-auto-rows: minmax(50px, auto);
  margin: 1rem;
  font-family: 'Roboto';
  > * {
    font-size: 1rem !important;
  }
`;

const Search = styled.input`
  margin: 0;
  height: 100%;
  box-sizing: border-box;
`;

const SearchIcon = styled.img`
  margin-left: 0.2rem;
  margin-top: 0.1rem;
  height: 100%;
  display: block;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  justify-content: stretch;
  align-content: stretch;
  align-items: center;
  height: 2rem;
  width: 40%;
  margin: 2rem 0 1rem 1rem;
`;

const Tablehead = styled.div`
  font-weight : 600;
  width: 100%;
  height: 100%;
  display: grid;
  text-align: center;
  align-items: center;
border: 0.05rem #ccc solid;
`;
export { ScheduleContainer, Tablehead, Search, SearchIcon, SearchContainer };
