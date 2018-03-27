import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Navbar from './components/navbar';
import Main from './components/main';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)