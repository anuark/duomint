import React, { Fragment, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './Blastoff.css';

const Blastoff = props => {
    const {userAddress, setUserAddress } = props;

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
          <ReactPlayer url='https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/' />
        </Container>
    );
}

export default Blastoff;