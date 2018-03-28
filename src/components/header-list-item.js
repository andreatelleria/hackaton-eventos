import React from 'react';

const HeaderListItem = ({ name, href }) => (
  <li class="nav-item">
    <a class="nav-link" href="{href}">{name}</a>
  </li>
)

export default HeaderListItem;