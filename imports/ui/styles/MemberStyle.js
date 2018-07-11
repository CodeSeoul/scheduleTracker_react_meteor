import styled from 'styled-components';

const FixedColumn = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  text-align : center;
  align-items: center;
  border: 0.05rem #ccc solid;
`;


const Select = styled.select`
  width: 100%;
  height: 100%;

  ${props => {
    switch (props.type) {
      case 0:
        return 'background:linear-gradient(rgba(255,255,255,100%),rgba(255,255,255,100%) 20%, rgba(195,36,186,0.7));';
      case 1:
        return 'background:linear-gradient(rgba(255,255,255,100%),rgba(255,255,255,100%) 20%, rgba(210,13,13,0.7));';
      case 2:
        return 'background:linear-gradient(rgba(255,255,255,100%),rgba(255,255,255,100%) 20%, rgba(35,183,255,0.7));';
      case 3:
        return 'background:linear-gradient(rgba(255,255,255,100%),rgba(255,255,255,100%) 20%, rgba(21,110,23,0.7));';
      case 4:
        return 'background:linear-gradient(rgba(255,255,255,100%),rgba(255,255,255,100%) 20%, rgba(255,163,13,0.7));';
    }
  }};
`;

const Option = styled.option`

`

export { Select, Option, FixedColumn };
