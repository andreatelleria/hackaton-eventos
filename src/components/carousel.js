import React from 'react';
import "../styles/carousel.css";


const dataCarousel = [
  {
    name : 'carousel2',
    url : './assets/img/gato2.jpg',
    text : 'Descubre los eventos más relevantes y que son tendencia'
  },
  {
    name : 'carousel3',
    url : './assets/img/gato3.jpg',
    text : 'Los eventos permiten hacer una comunidad con personas de similares intereses. Atrévete a descubrir'
  }
];

const Carousel = (data) => (
  <div className = "row">
    <div className = "col s12" >
    {/* Carrusel */}
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 img-size" src="./assets/img/carousel1.png" alt="First slide" />
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