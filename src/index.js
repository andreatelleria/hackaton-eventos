import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import CreateEvent from './components/createevent';


const App = () => {
  return (
    <div>
      <CreateEvent />
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)