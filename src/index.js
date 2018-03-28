import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';
import Header from './components/header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (    
    <div >
      <Header />
      <Main/>
    </div>
  );
}

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)