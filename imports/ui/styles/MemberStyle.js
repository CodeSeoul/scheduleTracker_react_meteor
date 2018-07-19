import styled from 'styled-components';

const FixedColumn = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  align-items: center;
  font-size : 1.1rem;
  border: 0.05rem #ccc solid;
`;

 const SelectContainer = styled.div`
   width: 100%;
   height: 100%;
   min-width : 120px !important;
   border: 0.05rem #ccc solid;
   display : grid;
   grid-auto-columns : minmax(1fr, 60%);
   text-align: center;
   align-items: center;
   justify-content : center;
 `;
 

 const Select = styled.select`
  appearance : none;
  text-align-last : center !important;
  border : none;
  background-color : rgb(249, 254, 255);
  padding : 3px 0;
  font-size : 1.1rem;
  font-family : 'Roboto';

  ${props => {
    let type = parseInt(props.type);
    //console.log('style props', props);
    switch (type) {
      case 0:
        return 'box-shadow: 0 8px 0 rgba(195,36,186,0.7);';
      case 1:
        return 'box-shadow: 0 8px 0 rgba(210,13,13,0.7);';
      case 2:
        return 'box-shadow: 0 8px 0 rgba(35,183,255,0.7);';
      case 3:
        return 'box-shadow: 0 8px 0 rgba(21,110,23,0.7);';
      case 4:
        return 'box-shadow: 0 8px 0 rgba(255,163,13,0.7);';
    }
  }};
`;

const Option = styled.option`
font-family : 'Roboto';
background-color : #eee;
`;

const Delete = styled.button`
 background : none;
 width : 100%;
 height : 100%;
 border: 0.05rem #ccc solid;
 padding : 0;
 margin : 0;
 box-sizing : content-box;
`;

const DeleteIcon = styled.img`
width : 1.5rem;
filter : invert(70%);
 :hover{
   transform : scale(1.1,1.1);
   filter : invert(0);
 }
`

export { Select, Option, FixedColumn, Delete, DeleteIcon, SelectContainer };
