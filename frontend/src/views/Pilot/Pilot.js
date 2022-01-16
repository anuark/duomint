import React, { Fragment, useState, useEffect } from 'react';
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MetaMask from '../MetaMask.js';
import './Pilot.css';

const Pilot = props => {
    const {userAddress, setUserAddress } = props;
    const [i, setIterator] = useState(1);

    const deployedNft ='0x652716673DA8401Dc9F34f0fA28751f21C39E547';
    const provider = new ethers.providers.AlchemyProvider("rinkeby");



    const passengers = [
    '0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07',
    '0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB',
    '0xD5d1bb95259Fe2c5a84da04D1Aa682C71A1B8C0E'
    ];

    const plus = () => { if (i < 10) setIterator(i+1); }
    const minus = () => { if (i > 1) setIterator(i-1); }

    const mint = async () => {
        // const nft = await hre.ethers.getContractAt('NFT2', deployedNft);
        // const signer0 = await ethers.provider.getSigner(0);
        // const nonce = await signer0.getTransactionCount();

        const pilotTokenURI = 'https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu';
        const passengerTokenURI = 'https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu';
        // await nft.duoMint(passengers, pilotTokenURI, passengerTokenURI);

        console.log("DuoMint Successful!");
    }

    return (
        <Container className={'mt-5'}>
            <p>{signer0}</p>
            <MetaMask setUserAddress={setUserAddress} />
            <Row className={'mt-5'}>
                <h4>How many passengers do you want to onboard?</h4>
                <Col className="pull-right">
                    <Button className="float-end" variant="primary" onClick={minus}>-</Button>
                </Col>
                <Col xs="1" lg="1"><h3>{i}</h3></Col>
                <Col>
                    <Button className="float-start" variant="primary" onClick={plus}>+</Button>
                </Col>
            </Row>
            <Row className={'mt-5'}>
                <Col>
                <Button className="" variant="primary" onClick={mint}>Mint NFT Collection</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Pilot;
