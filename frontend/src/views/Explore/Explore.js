import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';
import ReactPlayer from 'react-player'
import './Explore.css';

const Verify = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col className="text-center p-5">
                    <h3>Congratulations!</h3>
                    <h3>Here is your newly minted NFT</h3>
                    <ReactPlayer url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' />
                    <h3>You can do a lot with your NFT, let us show you!</h3>
                    <Button variant="primary" href="/explore-ownership">Explore</Button>
                </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
