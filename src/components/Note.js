import React, { Component } from 'react';
import '../styles/Note.css'
import FileUpload from './FileUpload'
// import ImgUpload from './ImgUpload'

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: []
    }
    this.noteId = props.noteId;
    this.noteContent = props.noteContent;

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleRemove(id) {
    console.log(id);
    const response = window.confirm('¿Está seguro de eliminarlo?')
    if(response){
      this.props.removeNote(id);
    }
    return
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      console.log(error.message)
    }, () => {
      this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL
      });
    });
  } 

  render() {
    return (
      <div className="Note">
        <span
          onClick={() => this.handleRemove(this.noteId)}
        >&times;</span>
        {/* <FileUpload onUpload={ this.handleUpload }/>
        {
          this.state.picture.map(picture => {
            <div>
              <img src={pictures.image} alt=""/>
              <br/>
            </div>
          })
        } */}
        <p>{this.noteContent}</p>
      </div>
    )
  }
}

export default Note;