import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './Explore.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import Rec from '../../assets/Rectangle13.png';

const ExploreUtility = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Portability</h1>
                    <div className={"center"}>
                    <img src={Rec} />
                    </div>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>Certain NFTs can be brought into Web3 apps such as Spatial, a Metaverse art gallery</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="outline-light" href="/explore-ownership">Open in OnCyber</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><Link to="/explore-ownership"><BsArrowLeft color="white" size={20} /></Link><span className="text-muted"> 2 of 3 </span><Link to="/explore-access"><BsArrowRight color="white" size={20} /></Link> </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreUtility;
