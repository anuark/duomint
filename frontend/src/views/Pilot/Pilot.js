import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import MetaMask from '../MetaMask.js';

import './Pilot.css';

const Pilot = () => {
    const [userAddress, setUserAddress] = useState(null);

    return (
        <Container>
            <MetaMask setUserAddress={setUserAddress} />
        </Container>
    );
}

export default Pilot;
