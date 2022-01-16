import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Explore.css';
import NftImg from '../../assets/nft-voyager.png';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const ExploreOwnership = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Ownership</h1>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>NFTs certify your ownership of a digital asset. This is now certified by the Ethereum Blockchain. Everyone is able to read and verify that this is uniquely yours.</h4>
                      <h4>For now, let's view our own NFT</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="primary" href="https://testnets.opensea.io/assets/0x652716673da8401dc9f34f0fa28751f21c39e547/59" target="_blank"><AiOutlineCloudUpload/> View your NFT on Opensea</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><span className="text-muted">1 of 3</span><Link to="/explore-utility"><BsArrowRight size={20} /></Link> </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreOwnership;

