import React from 'react';
import { Link } from 'react-router-dom'

const HeaderListItem = ({ name, href }) => (
  <li className="nav-item">
    <Link to='/Login' className="nav-link">{name}</Link>
  </li>
)

export default HeaderListItem;