import React from 'react';
//import './styles/main.css';

const Main = () => (
  <div className = "container">
    {/* Carrusel */}
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="../../assets/img/Eventos.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>La plataforma de eventos más poderosa, fácil e intuitiva</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Descubre los eventos más relevantes y que son tendencia</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Los eventos permiten hacer una comunidad con personas de similares intereses, atrévete a descubrir
            </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>DConecta entre los asistentes y comparte información durante el evento</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Únete a la comunidad networking de tu interés</h5>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* Fin de Carrusel */}
    <p>Hola</p>
  </div>
)

export default Main;