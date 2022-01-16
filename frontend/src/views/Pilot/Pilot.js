import React, { useState } from 'react';
import { ethers } from "ethers";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Rec from '../../assets/Rectangle13.png';
import MetaMask from '../MetaMask.js';
import './Pilot.css';

const Pilot = props => {
    const {userAddress, setUserAddress } = props;
    const [i, setIterator] = useState(1);
    const [minted, setMinted] = useState(false);

    const deployedNft ='0x652716673DA8401Dc9F34f0fA28751f21C39E547';
    
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);

    const passengers = [
    '0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07',
    '0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB',
    '0xD5d1bb95259Fe2c5a84da04D1Aa682C71A1B8C0E'
    ];

    const plus = () => { if (i < 10) setIterator(i+1); }
    const minus = () => { if (i > 1) setIterator(i-1); }

    const mint = async () => {
      const signer = provider.getSigner(0);
      const contract = new ethers.Contract( deployedNft, abi, signer);
      
      const pilotTokenURI = 'https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/';
      const passengerTokenURI = 'https://bafybeihm4x3trnqzs5nzk4h2mbaskdye2os3vy4cjbcllk56dxwp2bnj6m.ipfs.dweb.link/';
      
      await contract.duoMint(passengers, pilotTokenURI, passengerTokenURI);
      console.log("DuoMint Successful!");
      setMinted(true);
    }

    return (
        <Container className={'mt-5'} style={{textAlign:'center'}}>
          {minted ? <Navigate to="/blastoff" /> : null}
            <MetaMask setUserAddress={setUserAddress} />
            <Row className={'mt-4'}>
                <h4>How many passengers do you want to onboard?</h4>
            <div className={"center"}>
            <img src={Rec} />
            </div>
                <Col className="pull-right">
                    <Button className="float-end" variant="outline-light" onClick={minus}>-</Button>
                </Col>
                <Col xs="1" lg="1"><h3>{i}</h3></Col>
                <Col>
                    <Button className="float-start" variant="outline-light" onClick={plus}>+</Button>
                </Col>
            </Row>
            <Row className={'mt-5'}>
                <Col >
                <Button className="" variant="outline-light" onClick={mint}>Mint NFT Collection</Button>
                </Col>
            </Row>
            <Row className={'mt-5'}>
            <p>There 43 eager newcomers waiting in the queue</p>
            queue
            </Row>
        </Container>
    );
}

const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "receivers",
          "type": "address[]"
        },
        {
          "internalType": "string",
          "name": "pilotTokenURI",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "passengerTokenURI",
          "type": "string"
        }
      ],
      "name": "duoMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "receivers",
          "type": "address[]"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintPassengerToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintPilotToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export default Pilot;
