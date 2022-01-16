import React, { Fragment, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import Rec from '../../assets/Rectangle13.png';
import './Blastoff.css';

const Blastoff = props => {
    const {userAddress, setUserAddress } = props;

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
          <h4>Thank you for onboaring [#] people, as a reward here is your Pilot Pass</h4>
          <div className={"center"}>
          <img src={Rec} />
          </div>
          <ReactPlayer url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' />
          <p>Your contribution to the space is invaluable. We’ve create a discord server for others like yourself</p>
          <Button variant="outline-light">Access the Pilot Community Discord</Button>
        </Container>
    );
}

export default Blastoff;