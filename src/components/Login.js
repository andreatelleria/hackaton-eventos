import React from 'react'
import firebase from 'firebase'

const handleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => console.log(result.user.email)) 
    .catch(error => console.log(`Error ${error.code}: ${error.messsage}`));
};
const Login = () => {
    return (
      <div>
        <div>
          <input placeholder="Correo"/>
        </div>
        <div>
          <input placeholder="Contraseña"/>
        </div>
        <button onClick={handleAuth}>Google</button>
      </div>
    );
  }

  export default Login 