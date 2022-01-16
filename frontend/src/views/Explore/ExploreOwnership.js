import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rec from '../../assets/Rectangle13.png';
import './Explore.css';
import { BsArrowRight } from 'react-icons/bs';

const ExploreOwnership = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Ownership</h1>
                    <div className={"center"}>
                    <img src={Rec} />
                    </div>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>NFTs certify your ownership of a digital asset. For example, anyone who views this NFT on a platform like Etherscan will be able to see it belongs to you.</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="outline-light" href="https://testnets.opensea.io/assets/0x652716673da8401dc9f34f0fa28751f21c39e547/59" target="_blank">View on Etherscan</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><span className="text-muted"> 1 of 3 </span><Link to="/explore-utility"><BsArrowRight color="white" size={20} /></Link> </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreOwnership;

