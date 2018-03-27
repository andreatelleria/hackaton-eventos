import './main.css'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import firebase from 'firebase'
import { DB_CONFIG } from './config/config'
import 'firebase/database'
import Note from './components/Note'
import NoteForm from './components/NoteForm'

// Initialize Firebase
/*
const config ={
    apiKey: "AIzaSyBpUYNpJAd0DRN608ti6FBUxhKte6Z616U",
    authDomain: "red-eventos.firebaseapp.com",
    databaseURL: "https://red-eventos.firebaseio.com",
    projectId: "red-eventos",
    storageBucket: "red-eventos.appspot.com",
    messagingSenderId: "24593069744"
  };
firebase.initializeApp(config);
*/

// ejemplo de hacer conección con firebase

/*
class App extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Carlos'
    }
  }
  // metodo de ciclo de vida componentes en react, se invoca/activa cuando el componente ya ha sido renderizado en el Dom
  componentWillMount () {
    const nameRef = firebase.database().ref().child('object').child('name')
   
    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render (){
    return(
    <div>
      <h1>{this.state.name}</h1>
    </div>
    )
  }
}
*/

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };

    this.app =firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  // metodos de react, ciclo d evida

  componentDidMount() {
    const { notes } = this.state; //destructure

    this.db.on('child_added', snap => {
      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({ notes });
    });

    this.db.on('child_removed', snap => {
      for(let i = 0; i < notes.length; i++){
        if (notes[i].noteId = snap.key){
          notes.splice(i, 1);
        }
      }
      this.setState({ notes });
    })
  }

  removeNote(noteId) {
    this.db.child(noteId).remove();
  }

  addNote(note) {
    /*
    let { notes } = this.state;
    notes.push({
      noteId: notes.length + 1,
      noteContent: note
    });
    this.setState({
      notes //notes:notes
    })
    */

    this.db.push().set({noteContent: note});
  }

  render () {
    return(
    <div className="notesContainer">
      <div className="notesHeader">
        <h1>React y Firebase App</h1>
      </div>
      <div className="notesBody">
        <ul>
          {
            this.state.notes.map(note => {
              return (
                <Note 
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                  removeNote={this.removeNote}
                />
              )
            })
          }
        </ul>
      </div>
      <div className="notesFooter">
        <NoteForm 
          addNote = {this.addNote}
        />
      </div>
      
    </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

