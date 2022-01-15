import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './VoyagerSignUp.css';

const VoyagerSignUp = () => {
    const metamaskConnect = () => {
        console.log('connecting');
    }

    return (
        <Container>
            <Button className={"metamask-btn"} variant="outline-primary" onClick={metamaskConnect()}>Connect with Metamask</Button>
            <p className={"mt-2 text-center"}>Don't have one yet? <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Create</a></p>
        </Container>
    );
}

export default VoyagerSignUp;
