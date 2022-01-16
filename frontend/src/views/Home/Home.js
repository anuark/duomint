import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Doodle from '../../assets/image 5.png';
import Dog from '../../assets/image10.svg';
import Rec from '../../assets/Rectangle13.png';
import Voyager from '../../assets/voyager.mp4';
import Pilot from '../../assets/pilot.mp4';
import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <Row className={"mt-5 mb-5"}>
                <Col><h1>An NFT for newcomers —100% free</h1></Col>
                <Col>Crypto-natives can donate the gas fees to onboard newcomers <br/><br/>Helping grow the ecosystem and earning a reward along the way</Col>
            </Row>
            <div className={"center"}>
            <img src={Rec} />
            </div>

          <Row className={"mt-5 mb-5 center"}>
              <Col>
              <video className='videohome' type='video/mp4' src={Voyager} autoPlay loop muted></video>

                  <h3 className={"mt-3"}>Voyager Pass</h3>
                  <p>Free for newcomers</p>
                  <Button variant="outline-light" href="/voyagers">Collect</Button>
              </Col>
              <Col>
              <video className='videohome' type='video/mp4' src={Pilot} autoPlay loop muted></video>
                  <h3 className={"mt-3"}>Pilot Pass</h3>
                  <p>Sponsor gas fees & earn this reward</p>
                  <Button variant="outline-light" href="/pilots">Collect</Button>
              </Col>
          </Row>
          <div className={"mt-3 center"}>
            <img src={Rec} />
          </div>
          <Row className={"mt-5"}>
              <p className={"center"}>New in Summer 2022</p>
              <h1 className={"center"}>See highlights from the people you’ve onboarded</h1>
          </Row>

          <Row className={"mt-5"}>
              <h3 className={"center"}>Cool things from the 9 wallets you onboarded</h3>
              <Row className={"mt-5"}>
                  <Col>
                    <img src={Doodle} />
                  </Col>
                  <Col>
                      <h3 className={"mt-5"}>7 Doodles</h3>
                      <p>Minted across 3 of the wallets you brought to the space</p>
                  </Col>
              </Row>
              <Row className={"mt-5"}>
                <Col>
                      <h3 className={"mt-5"}>3 Shiba Inu Millionaires</h3>
                      <p>Got their start minting an NFT that you funded</p>
                </Col>
                 <Col>
                    <img src={Dog} />
                </Col>
                  </Row>
          </Row>
        </Fragment>
    );
};

export default Home;

