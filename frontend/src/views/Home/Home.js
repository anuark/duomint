import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Doodle from '../../assets/image 5.png';
import Dog from '../../assets/image10.svg';
import Rec from '../../assets/Rectangle13.png';
import ReactPlayer from 'react-player'
import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <Row className={"mt-5"}>
                <Col><h1>An NFT for newcomers —100% free</h1></Col>
                <Col>Crypto-natives can donate the gas fees to onboard newcomers <br/><br/>Helping grow the ecosystem and earning a reward along the way</Col>
            </Row>
            <div className={"center"}>
            <img src={Rec} />
            </div>

          <Row className={"mt-5"}>
              <Col>
                <div className='react-wrapper'><ReactPlayer className='react-player' url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' /></div>
                  <h3 className={"mt-3"}>Voyager Pass</h3>
                  <p>Free for newcomers</p>
                  <Button variant="outline-light" href="/voyagers">Collect</Button>
              </Col>
              <Col>
              <div className='react-wrapper'><ReactPlayer className='react-player' url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' /></div>
                  <h3 className={"mt-3"}>Pilot Pass</h3>
                  <p>Sponsor gas fees & earn this reward</p>
                  <Button variant="outline-light" href="/pilots">Collect</Button>
              </Col>
          </Row>
          <div className={"center"}>
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

