import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import NftImg from '../assets/firefox_1fPtnUKIee.png';
import Doodle from '../assets/image 5.png';

const Home = () => {
    return (
        <Fragment>
          <Row className={"mt-5"}>
              <Col>
                  <img src={NftImg} />
                  <h3 className={"mt-3"}>Voyager Pass</h3>
                  <p>A chance for newcomersto the space to own an NFT and learn about it free of any cost whatsoever</p>
                  <Button variant="primary">Free</Button>
              </Col>
              <Col>
                  <img src={NftImg} />
                  <h3 className={"mt-3"}>Pilot Pass</h3>
                  <p >Mark yourself in history as one of the pioneers in the space that helped onboard the world to web3</p>
                  <Button variant="primary">Starting at 0.04 ETH</Button>
              </Col>
          </Row>

          <Row className={"mt-5"}>
              <h1>438</h1>
              <p>People onboarded so far</p>
          </Row>

          <Row className={"mt-5"}>
              <h1>Launch Project Wrapped</h1>
              <p>See Highlights from the people you've onboarded</p>

              <Row className={"mt-5"}>
                  <Col>
                    <img src={Doodle} />
                  </Col>
                  <Col>
                      <h1 className={"mt-5"}>7 Doodles</h1>
                      <p>Were minted across 3 of your voyagers this year</p>
                  </Col>
              </Row>
          </Row>
        </Fragment>
    );
};

export default Home;

