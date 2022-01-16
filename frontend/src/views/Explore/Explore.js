import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Voyager from '../../assets/voyager.mp4';
import Rec from '../../assets/Rectangle13.png';
import './Explore.css';

const Verify = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col className="text-center p-5">
                    <h3>Introducing, your Voyager Pass NFT!</h3>
                    <img src={Rec} />
                    <video className='video' type='video/mp4' src={Voyager} autoPlay loop muted></video>
                    <h3>Let’s guide you through 3 things you can do with your NFT</h3>
                    <Button variant="outline-light" href="/explore-ownership">Explore</Button>
                </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
