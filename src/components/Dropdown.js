import React from 'react';


const Dropdown = (props) => {
  const { options } = props;
  return <h1>Hi from dropdown {options[0].label}</h1>
}

export default Dropdown;