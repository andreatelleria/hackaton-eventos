import React, { Component } from 'react';
import '../styles/FileUpload.css'

class FileUpload extends Component {
  constructor(){
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render() {
    return(
      <div className="FileUpload">
        <progress value={this.state.uploadValue} max="100"></progress>
        <br/><br/>
        <input type="file" onChange={this.props.onUpload}/>
      </div>
    )
  }
}

export default FileUpload;