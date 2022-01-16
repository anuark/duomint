import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MetaMask from '../MetaMask.js';
import Rec from '../../assets/Rectangle13.png';
import './VoyagerSignUp.css';

const VoyagerSignUp = props => {
    const {userAddress, setUserAddress } = props;
    const [connected, setConnect] = useState(false);

    const verify = () => {
        setConnect(true);
    }

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
            <h4>Let's Start!</h4>
            <div className={"center"}>
            <img src={Rec} />
            </div>
            <MetaMask setUserAddress={setUserAddress} />
            {!userAddress ?
            <p className={"mt-4 text-center"}>Don't have one yet? 
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target='_blank'>Create</a>
            </p> 
            : 
            <Row className={'mt-5'}>
                <Col >
                <Link to='/verify'><Button variant="outline-light" onClick={verify}>Verify with Twitter</Button></Link>
                </Col>
            </Row>
            }
        </Container>
    );
}

export default VoyagerSignUp;
