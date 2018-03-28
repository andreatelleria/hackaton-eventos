import React from 'react';
import TopImageEvent from './top-image-event';

const AdminShowForm = () => (
  <div className="container-fluid">
    <div className="row" >
      <div className="col-md-10 offset-md-1">
        <TopImageEvent />
      </div>
    </div>

    <div className="row" >
      <div className="col-md-10 offset-md-1">
        <h2 className="text-center title">Ux and Front-End Developer en Latinoamérica</h2>
      </div>
    </div>

    <div className="row" >
      <div className="col-md-8 offset-md-2 text-justify">
        <p>Durante el evento se realizarán varios talleres y conferencias a cargo de grandes líderes de la industria. Además de ello se dictará la conferencia de Diseño de Interacción, Experiencia de Usuario, Tecnología e Innovación más relevante de Sudamérica.</p>
      </div>
    </div>

    <div className="row" >
      <div className="col-md-10 offset-md-1">
        <div className="list-container">
          <ul className="list-unstyled date-and-place text-center">
            <li>23 de marzo 2018</li>
            <li>08:00 - 18:00</li>
            <li>UTEC, Barranco</li>
          </ul>
        </div>
      </div>
    </div>

    {/*     <div className="row" >
      <div className="col-md-10 offset-md-1">
        <button>Reserva tu entrada</button>
      </div>
    </div> */}

    <div className="row" >
      <div className="col-md-8 offset-md-2">
        <h4 className="title-agenda">Agenda del Evento</h4>

        <div className = "container session-box">
          <ul className="list-unstyled session-border">
            <li>08:30 - 9:00</li>
            <li text-right><span>Registro de asistentes</span> <br/> 
                <span><em>Auditorio Principal - Pabellón “A”</em></span></li>
            <li className="text-right"><span><i class="far fa-edit"></i></span> <br/> 
                <i className="fas fa-users"></i>&ensp;20</li>
          </ul>
        </div>

        <div className = "container session-box">
          <ul className="list-unstyled session-border">
            <li>09:00 - 9:30</li>
            <li text-right><span>Registro de asistentes</span> <br/> 
                <span><em>Auditorio Principal - Pabellón “B”</em></span></li>
            <li className="text-right"><span><i class="far fa-edit"></i></span> <br/> 
                <i className="fas fa-users"></i>&ensp;15</li>
          </ul>
        </div>

        <div className = "container session-box">
          <ul className="list-unstyled session-border">
            <li>09:00 - 9:30</li>
            <li text-right><span>Registro de asistentes</span> <br/> 
                <span><em>Auditorio Principal - Pabellón “A”</em></span></li>
            <li className="text-right"><span><i class="far fa-edit"></i></span> <br/> 
                <i className="fas fa-users"></i>&ensp;15</li>
          </ul>
        </div>

        <div className = "container session-box">
          <ul className="list-unstyled session-border">
            <li>9:30 - 10:00</li>
            <li text-right><span>Registro de asistentes</span> <br/> 
                <span><em>Auditorio Principal - Pabellón “B”</em></span></li>
            <li className="text-right"><span><i class="far fa-edit"></i></span> <br/> 
                <i className="fas fa-users"></i>&ensp;10</li>
          </ul>
        </div>

      </div>
    </div>

  </div>
)

export default AdminShowForm;