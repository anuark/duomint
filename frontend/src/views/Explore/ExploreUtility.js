import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Explore.css';
import NftImg from '../../assets/nft-voyager.png';
import { Link } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

const ExploreUtility = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Utility</h1>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>Certain NFTs will have some utility on other apps. Trying bringing your NFT into this Metaverse</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="primary" href="/explore-ownership"><FaRegCircle/>&nbsp;&nbsp;&nbsp; Open in OnCyber</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><Link to="/explore-ownership"><BsArrowLeft size={20} /></Link><span className="text-muted">2 of 3</span><Link to="/explore-access"><BsArrowRight size={20} /></Link> </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreUtility;
