import React from 'react';

function SelectCreator(props) {
  let options = props.items.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  return <select>{options}</select>;
}

export default SelectCreator;
