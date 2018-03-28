import React from 'react'
import '../styles/cardEvent.css'

const CardEvent = ({title, name, organizer, address, url}) => {
    return (
      <li className="cardEvent col-4 mt-5 cardEvent list-unstyled mb-5 ml-0 mr-0">
        <a href="/">
          <div className="card">
            <img className="card-img-top" src={url} alt={name}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{organizer}</p>
              <p className="card-text">{address}</p>
            </div>
          </div>
        </a>
      </li>
    );
  }

  export default CardEvent;


 