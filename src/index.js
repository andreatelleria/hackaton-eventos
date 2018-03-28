import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Header from './components/header';


const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)