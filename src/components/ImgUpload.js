import React, { Component } from 'react';
import '../styles/ImgUpload.css'

class ImgUpload extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
      }
  
    render() {
      return (
        <img
          src={this.state.picture}
          alt=""
        />
      )
    }
  }
  
  export default ImgUpload;