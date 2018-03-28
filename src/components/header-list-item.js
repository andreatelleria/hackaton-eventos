import React from 'react';

const HeaderListItem = ({ name, href }) => (
  <li className="nav-item">
    <a className="nav-link" href="{href}"><span>{name}</span></a>
  </li>
)

export default HeaderListItem;