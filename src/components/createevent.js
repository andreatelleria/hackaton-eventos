import React from 'react';
//import './styles/createevent.css';

const CreateEvent = () => (
  <div className='container'>
    <div className='row'>
      <h3>Hackaton Laboratoria</h3>
    </div>
    <div className='row'>
      <p>Uno de los eventos más grandes de tecnología en Lima.</p>
    </div>
    <div className='row'>
      <p>20 de febrero de 2018</p>
      <p>08:00 - 16:00</p>
    </div>
    <div className='row'>
      <p>Comunal Barranco</p>
    </div>
    <div className='row'>
      <h5>Speakers</h5>
      <div>
        {/* Tarjetas */}
      </div>
    </div>
    <div className='row'>
      <h5>Redes Sociales</h5>
      <p>Compartir este evento</p>
      <div>
        {/* Icons */}
      </div>
    </div>
  </div>
)

export default CreateEvent; 