import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import MetaMask from '../MetaMask.js';
import './VoyagerSignUp.css';

const VoyagerSignUp = props => {
    const {userAddress, setUserAddress } = props;

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
            <MetaMask setUserAddress={setUserAddress} />
            {/* <Button className={"metamask-btn"} variant="outline-primary" onClick={metamaskConnect()}>Connect with Metamask</Button> */}
            <p className={"mt-4 text-center"}>Don't have one yet? <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target='_blank'>Create</a></p>
        </Container>
    );
}

export default VoyagerSignUp;
