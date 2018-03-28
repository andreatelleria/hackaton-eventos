import React, {Component} from 'react'
import firebase from 'firebase'


class LoginGoogle extends Component {
  constructor() {
    super();
    this.state = {  
      user: null   
    };
    this.handleAuth = this.handleAuth.bind(this);

  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      });
    })
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
     .then(result => console.log(result.user.email)) 
     .catch(error => console.log(`Error ${error.code}: ${error.messsage}`));
     
    }
    handleLogout() {
      
      firebase.auth().signOut()
       .then(result => console.log(result.user.email)) 
       .catch(error => console.log(`Error ${error.code}: ${error.messsage}`));
       
      }
  renderLoginButton () {
    if(this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} />
          <p>Hola {this.state.user.displayName}</p>
          <button onClick={this.handleLogout}>Cerrar Sesión</button>
        </div>
      )
    } else{
      return(
        <button  className="btn btn-light"onClick={this.handleAuth}><i className="fab fa-2x fa-lg fa-google-plus "></i>Google</button>
      )
      
    }
  }
  

  render() {
    return(
      <div>
        {this.renderLoginButton()}
      </div>
    )
  }  
}

export default LoginGoogle;
