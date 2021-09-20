import React from 'react';
import Accordion from './components/Accordion';

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
]

export default () => {
  return (
    <div>
      <h1>Hi from App</h1>
      <Accordion items={items} />
    </div>
    )
}