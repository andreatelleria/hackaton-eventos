import React from 'react'
import LoginGoogle from './LoginGoogle'
import '../styles/login.css';

const LoginPage = () => {
    return (
      <div className="row justify-content-md-center">
        <div className="col-6 ">
          <img src="./assets/img/carousel5.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-6">
          <h1>EVENTUX</h1>
          <form className="">
            <div className="form-group">
              <input placeholder="Correo Electrónico" className="form-control"/>
            </div>
            <div className="form-group">
              <input placeholder="Contraseña" className="form-control"/>
            </div>
            <div className="form-group ">
              <button type="button" className="btn btn-success">Iniciar Sesión</button>
            </div>
            <h6><span>o ingresa con</span></h6>
            <div className="form-group">
              <LoginGoogle />
            </div>
          </form>
        </div>
        
      </div>      
    );
  
}
export default LoginPage