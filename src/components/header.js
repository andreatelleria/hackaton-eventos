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
/*   {
    name: 'Inicio',
    href: '#',
  },
  {
    name: 'Agenda',
    href: '#',
  }, */
]

const Header = () => (
  <nav class="navbar navbar-light navbar-expand-md bg-aquamarine justify-content-center">
    <HeaderLogo />
    <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar">
      <HeaderNavList items = {HeaderItems} />
    </div>
  </nav>
)

export default Header;