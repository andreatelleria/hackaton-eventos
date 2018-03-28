import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';
import AdminShowEvent from './components/admin-show-event';


const App = () => {
  return (    
    <div >
      <AdminShowEvent />
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
)