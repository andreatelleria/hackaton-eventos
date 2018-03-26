import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


const App = () => {
  return (
    <div>
      Hola
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)