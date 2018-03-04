import React from 'react';
import logo from '../assets/sprintie.png';

const Header = () => (
  <header>
    <div className="container">
      <img src={logo} alt="Sprintie logo" />
      <h1 className="app-title">Sprintie!</h1>
    </div>
  </header>
);

export default Header;
