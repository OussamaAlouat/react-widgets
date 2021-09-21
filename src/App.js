import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

 const App =  () => {
   const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search/>
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  )
}
export default App;