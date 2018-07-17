import styled from 'styled-components';

const FixedColumn = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  align-items: center;
  border: 0.05rem #ccc solid;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;

  ${props => {
    let type = parseInt(props.type);
    //console.log('style props', props);
    switch (type) {
      case 0:
        return 'background:rgba(195,36,186,0.7);';
      case 1:
        return 'background:rgba(210,13,13,0.7);';
      case 2:
        return 'background:rgba(35,183,255,0.7);';
      case 3:
        return 'background:rgba(21,110,23,0.7);';
      case 4:
        return 'background:rgba(255,163,13,0.7);';
    }
  }};
`;

const Option = styled.option``;

const Delete = styled.button``;

const DeleteIcon = styled.img`
width : 1.5rem;
`

export { Select, Option, FixedColumn, Delete, DeleteIcon };
