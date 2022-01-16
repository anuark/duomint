import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Explore.css';
import NftImg from '../../assets/nft-voyager.png';

const Verify = () => {
    return (
        <Fragment>
            <img src={NftImg} />
            <h3>You can do a lot with your NFT, let us show you!</h3>
            <Button variant="primary" href="/explore-ownership">Explore</Button>
        </Fragment>
    );
};

export default Verify;
