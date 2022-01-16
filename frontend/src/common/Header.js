import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../logo.svg';

const Header = () => {
    return (
      <header className="text-center">
        <Nav.Link href='/'>
          <img src={logo} style={{width: "100px"}} href="/" />
        </Nav.Link>
        <h1>Duo Mint</h1>
      </header>
    );
}

export default Header;
