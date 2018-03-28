import React from 'react';
import HeaderListItem from './header-list-item'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const HeaderNavList = ({ items }) => (
  <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
    {items.map(item =>
      <HeaderListItem
        key={item.name}
        {...item}
      />
    )}
  </ul>
)

export default HeaderNavList;