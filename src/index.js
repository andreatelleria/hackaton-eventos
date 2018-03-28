import './main.css'
import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Main from './components/Main'

firebase.initializeApp({
  apiKey: "AIzaSyByqvButDPrBlzb9AIrlYPh9LOoy5Jnpjk",
  authDomain: "reto-eventos.firebaseapp.com",
  databaseURL: "https://reto-eventos.firebaseio.com",
  projectId: "reto-eventos",
  storageBucket: "reto-eventos.appspot.com",
  messagingSenderId: "558847801184"
})

const App = () => {
  return (
    <Main/>
  );
}

render(
  <App />,
  document.getElementById('root')
)