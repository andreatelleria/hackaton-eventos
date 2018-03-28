import React from 'react';
import HeaderListItem from './header-list-item';

const HeaderNavList = ({ items }) => (
  <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
    {items.map(item =>
      <HeaderListItem
        key={item.name}
        {...item}
      />
    )}
  </ul>
)

export default HeaderNavList;