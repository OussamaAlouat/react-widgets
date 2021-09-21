import React, { useState } from 'react';

const Accordion = (props) => {
  const [ activeIndex, setActiveIndex ] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const { items } = props;
  const renderedItems = items.map((item, index) => {

    const actve = index  === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${actve}`}
          onClick={ () => onTitleClick(index) }
        >
          <i className="dropdown icon"></i>
          { item.title }
        </div>
        <div className={`content ${actve}`}>
          <p>{ item.content }</p>
        </div>
      </React.Fragment>
    )
  })

  return <div className="ui styled accordion">
    { renderedItems }
  </div>;
}

export default Accordion;