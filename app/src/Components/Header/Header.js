import React from 'react';
import './header.scss';
import logo from '../../Assets/logo.png';

const Header = () => (
    <div className="header">
      <img src={logo} alt="Askable logo" className="logo"/>
    </div>
);

export default Header;
