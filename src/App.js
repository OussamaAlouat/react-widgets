import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React ?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a a favourite framework'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />
  }
};

const showList = () => {
  if(window.location.pathname === '/list') {
    return <Search />
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown options={options} selected />
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/dropdown') {
    return <Translate />
  }
}

 const App =  () => {
  return (
    <div>
      { showAccordion() }
      { showList() }
      { showDropdown() }
      { showTranslate() }
    </div>
  )
}
export default App;