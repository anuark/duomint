import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rec from '../../assets/Rectangle13.png';
import './Explore.css';
import { BsArrowLeft } from 'react-icons/bs';

const ExploreAccess = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Access</h1>
                    <div className={"center"}>
                    <img src={Rec} />
                    </div>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>NFTs can also be used as a token to authenticate your access to a gated experience such as an exclusive Discord server</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="outline-light" href="/explore-ownership"> Access Discord Server</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><Link to="/explore-utility"><BsArrowLeft color="white" size={20} /></Link><span className="text-muted"> 3 of 3 </span></Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreAccess;
