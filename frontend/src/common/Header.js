import React from 'react';
import logo from '../logo.svg';

const Header = () => {
    return (
      <header className="text-center">
          <img src={logo} style={{width: "100px"}} />
          <h1>Duo Mint</h1>
      </header>
    );
}

export default Header;
