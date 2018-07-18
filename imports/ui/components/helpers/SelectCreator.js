import React from 'react';

function SelectCreator({ items, value, name, onChangeHandler }) {
  let options = items.map((item, i) => {
    return (
      <option key={i} value={item}>
        {items[i]}
      </option>
    );
  });
  return (
    <select name={name} value={value} onChange={onChangeHandler}>
      {options}
    </select>
  );
}

export default SelectCreator;
