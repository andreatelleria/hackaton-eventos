import React from 'react';
import '../styles/header.css';
import HeaderLogo from './header-logo';
import HeaderNavList from './header-nav-list';

const HeaderItems = [
  {
    name: 'Crear evento',
    href: '#',
  },
  {
    name: 'Descubrir evento',
    href: '#',
  },
]

const Header = () => (
  <nav className="navbar navbar-light navbar-expand-md bg-aquamarine justify-content-center pt-3 pb-3 pl-5 pr-5">
    <HeaderLogo />
    <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
      <HeaderNavList items = {HeaderItems} />
    </div>
  </nav>
)

export default Header;