import React from 'react'
import '../styles/formEvent.css'

const FormEvent= () => {
    return (
      <div className="formEvent">
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
          <form>
            <div className="form-group">
              <label>Título del evento</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div className="form-group">
              <label >Descripción del evento</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            <div className="form-group">
              <label >Lugar del evento</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            <div className="form-group">
              <label >Fecha del evento</label>
              <input type="date" name="bday" min="2018-01-01" max="3000-12-31" className="form-control" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" className="form-control"/>
            </div>
          </form>
            <a href="#" className="btn btn-primary">Aceptar</a>
          </div>
        </div>
      </div>
    );
  }

  export default FormEvent;