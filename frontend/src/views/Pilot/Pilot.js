import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MetaMask from '../MetaMask.js';
import './Pilot.css';

const Pilot = () => {
    const [userAddress, setUserAddress] = useState(null);
    const [i, setIterator] = useState(1);
    const deployedNft ='0x652716673DA8401Dc9F34f0fA28751f21C39E547';

    const plus = () => { if (i < 10) setIterator(i+1); }
    const minus = () => { if (i > 1) setIterator(i-1); }

    const mint = () => {
       
    }

    return (
        <Container className={'mt-5'}>
            <MetaMask />
            <Row className={'mt-5'}>
                <h4 >How many passengers do you want to onboard?</h4>
                <Col className="pull-right">
                    <Button className="float-end" variant="primary" onClick={minus}>-</Button>
                </Col>
                <Col xs="1" lg="1"><h3>{i}</h3></Col>
                <Col>
                    <Button className="float-start" variant="primary" onClick={plus}>+</Button>
                </Col>
            </Row>
            <Row className={'mt-5'}>
                <Col>
                <Button className="" variant="primary" onClick={mint}>Mint NFT Collection</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Pilot;
