import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import MetaMaskOnboarding from '@metamask/onboarding';

const MetaMask = props => {
  const { setUserAddress } = props;
  const [connected, setConnected] = useState();
  const [buttonText, setButtonText] = useState('')
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
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

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText('Connected');
        onboarding.current.stopOnboarding();
      } else {
        setButtonText('Connect MetaMask Wallet');
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
      <Button 
      bg="light" variant="light" 
      className={`me-3 ${connected ? 'text-muted' : 'text-primary pe-auto'}`} 
      onClick={onClick}><BsFillLightningChargeFill />{buttonText}
      </Button>
  );
};

export default MetaMask;