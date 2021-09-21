import React, { useState } from 'react';


const Dropdown = (props) => {
  const [ open, setOpen ] = useState(false);
  const { options, selected, onSelectedChange } = props;

  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={ () => onSelectedChange(option) }
      >
        {option.label}
      </div>
    );
  });

  const active = open ? 'active visible' : ''
  const subActive = open ? 'visible transition' : ''

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={ () => setOpen(!open) }
          className={`ui selection dropdown ${active}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{ selected.label }</div>
          <div className={`menu ${subActive}`}>
            { renderedOptions }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;