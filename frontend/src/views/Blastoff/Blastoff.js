import React, { Fragment, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Rec from '../../assets/Rectangle13.png';
import Pilot from '../../assets/pilot.mp4';
import './Blastoff.css';

const Blastoff = props => {
    const {userAddress, setUserAddress } = props;

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
          <h4>Thank you for onboaring [#] people, as a reward here is your Pilot Pass</h4>
          <div className={"center"}>
          <img src={Rec} />
          </div>
          <video className='video' type='video/mp4' src={Pilot} autoPlay loop muted></video>
          <p>Your contribution to the space is invaluable. We’ve create a discord server for others like yourself</p>
          <Button variant="outline-light">Access the Pilot Community Discord</Button>
        </Container>
    );
}

export default Blastoff;