import React from 'react';
import { Nav } from 'react-bootstrap';
import union from './union.svg';

const Header = () => {
    return (
      <header className="text-center">
        <Nav.Link href='/'>
          <img src={union} style={{width: "100px"}} href="/" />
        </Nav.Link>
        <h1>Duo Mint</h1>
      </header>
    );
}

export default Header;
