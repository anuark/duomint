import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_size.png';
import { BsPlusCircle, BsFillLightningChargeFill } from 'react-icons/bs';
import MetaMaskOnboarding from '@metamask/onboarding';

const Header = props => {
  const { setUserAddress } = props;
  const [buttonText, setButtonText] = useState('Connect Wallet');
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }

    const handleNewAccounts = (newAccounts) => {
      setAccounts(newAccounts);
      setUserAddress(newAccounts[0]);
    };

    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        try {
          window.ethereum.off('accountsChanged', handleNewAccounts);
        } catch (_) {}
      };
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setConnected(true);
        onboarding.current.stopOnboarding();
      } else {
        setConnected(false);
      }
    }
  }, [accounts]);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="144"
            height="96"
            className="d-inline-block align-top"
            style={{ marginLeft: '42px' }}
          />{' '}
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Item>
            <NavDropdown title="Rinkeby" id="nav-dropdown" className="me-3">
              <NavDropdown.Item eventKey="4.1">Ethereum mainnet</NavDropdown.Item>
              <NavDropdown.Item>Ropsten</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Localhost</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link role={connected ? 'text' : 'button'} className={`me-3 pt-2  ${connected ? 'text-muted' : 'text-primary pe-auto'}`} onClick={onClick}><BsFillLightningChargeFill />{connected ? 'connected' : 'connect to wallet'}</Nav.Link>
          </Nav.Item>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
