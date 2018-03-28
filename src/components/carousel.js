import React from 'react';
import "../styles/carousel.css";


const dataCarousel = [
  {
    name : 'carousel1',
    url : './assets/img/carousel1.jpg',
    text : 'La plataforma de eventos más poderosa, fácil e intuitiva'
  },
  {
    name : 'carousel2',
    url : './assets/img/carousel2.jpg',
    text : 'Descubre los eventos más relevantes y que son tendencia'
  },
  {
    name : 'carousel3',
    url : './assets/img/carousel3.jpg',
    text : 'Los eventos permiten hacer una comunidad con personas de similares intereses, atrévete a descubrir'
  },
  {
    name : 'carousel4',
    url : './assets/img/carousel4.jpg',
    text : 'Conecta entre los asistentes y comparte información durante el evento'
  },
  {
    name : 'carousel5',
    url : './assets/img/carousel5.jpg',
    text : 'Únete a la comunidad networking de tu interés'
  },
  {
    name : 'carousel6',
    url : './assets/img/carousel6.jpg',
    text : 'Mobile?'
  }
];

const Carousel = (data) => (
  <div className = "row bg-img">
    <div className = "col-8 offset-sm-2" >
    {/* Carrusel */}
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 img-size" src="./assets/img/carousel1.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>La plataforma de eventos más poderosa, fácil e intuitiva</h5>
          </div>
        </div>
        
        <div className="carousel-item">
          <img className="d-block w-100 img-size" src="./assets/img/carousel2.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Descubre los eventos más relevantes y que son tendencia</h5>
          </div>
        </div>       
        
        <div className="carousel-item">
          <img className="d-block w-100 img-size" src="./assets/img/carousel3.jpg" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Los eventos permiten hacer una comunidad con personas de similares intereses. Atrévete a descubrir
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100 img-size" src="./assets/img/carousel4.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Conecta entre los asistentes y comparte información durante el evento</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100 img-size" src="./assets/img/carousel5.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Únete a la comunidad networking de tu interés</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100 img-size" src="./assets/img/carousel6.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Accede y gestiona eventos desde cualquier plataforma y dispositivo</h5>
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
    </div>
    {/* Fin de Carrusel */}
  </div>
)

export default Carousel;