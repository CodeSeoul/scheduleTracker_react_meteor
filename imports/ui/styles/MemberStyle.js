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
  min-width : 120px !important;
  appearance : none;
  text-align-last : center !important;
  padding : 10px;

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

const Option = styled.option`
font-family : 'Roboto';
background-color : #fff;
`;

const Delete = styled.button`
border :none;
background : none;
`;

const DeleteIcon = styled.img`
width : 1.5rem;
filter : invert(70%);
 :hover{
   transform : scale(1.1,1.1);
   filter : invert(0);
 }
`

export { Select, Option, FixedColumn, Delete, DeleteIcon };
