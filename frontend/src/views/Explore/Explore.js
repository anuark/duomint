import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './Explore.css';

const Verify = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col className="text-center p-5">
                    <h3>Introducing, your Voyager Pass NFT!</h3>
                    <ReactPlayer url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' />
                    <h3>Let’s guide you through 3 things you can do with your NFT</h3>
                    <Button variant="outline-light" href="/explore-ownership">Explore</Button>
                </Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
