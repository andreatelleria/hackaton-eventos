import React, { Component } from 'react';
import '../styles/NoteForm.css'
import FileUpload from './FileUpload'

class NoteForm extends Component {
  constructor() {
    super(); 
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    // console.log(this.textInput.value)
    this.props.addNote(this.textInput.value);
    this.textInput.value = '';
    this.textInput.focus();
  }
    
  render() {
    return (
      <div className="NoteForm">
        <input
          ref={input => {this.textInput = input;}}
          placeholder="Escribe una nota"        
          type="text"/>
        <br/><br/>
        <FileUpload />
        <button 
          onClick={this.addNote}
        >
          Add Note
        </button>
      </div>
    )
  }
}

export default NoteForm;