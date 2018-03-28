import React from 'react';
import { Link } from 'react-router-dom'

const HeaderListItem = () => (
  <div>
    <li className="nav-item block">
      <Link to='/Login' className="nav-link">Descubrir eventos</Link>
    </li>
    <li className="nav-item block">
      <Link to='/Login' className="nav-link">Crear evento</Link>
    </li>
    <li className="nav-item block">
      <Link to='/Admin' className="nav-link">Eventos</Link>
    </li>
  </div>
)

export default HeaderListItem;