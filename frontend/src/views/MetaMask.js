import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import MetaMaskOnboarding from '@metamask/onboarding';

const MetaMask = props => {
  const { setUserAddress } = props;
  const [connected, setConnected] = useState();
  const [buttonText, setButtonText] = useState('')
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((newAccounts) => setAccounts(newAccounts));
    }
  }, []);

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setConnected(true);
        setUserAddress(accounts[0]);
        onboarding.current.stopOnboarding();
      } else {
        setConnected(false);
      }
    }
  }, [accounts]);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText('Connected');
        onboarding.current.stopOnboarding();
      } else {
        setButtonText('Connect with MetaMask');
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
    <div>
      <p id='msgSender'>{accounts[0]}</p>
      <Button 
      bg="light" variant="outline-light" 
      className={`me-3 ${connected ? 'text-muted' : 'text-light pe-auto'}`} 
      onClick={onClick}>{buttonText}
      </Button>
    </div>
  );
};

export default MetaMask;