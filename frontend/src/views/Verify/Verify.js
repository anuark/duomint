import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ethers } from "ethers";
import './Verify.css';

const Verify = props => {
    const { userAddress } = props;
    const [twitterLink, setTwitterLink] = useState('');
    const formRef = useRef();
    const [intent, setIntent] = useState('');
    const [verified, setVerify] = useState(false);
    const [verifyBtnMsg, setVerifyBtnMsg] = useState('Verify');
    const navigate = useNavigate();

    const parseTweetId = (tweetText) => {
        return tweetText.split('/')[5].replace(/\?(.*)/, '');
    };
    
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(0);

    useEffect(async() => {
        let address = await signer.getAddress()
        let msg = encodeURIComponent(`Verifying on Duomint! 🍃🍃 ${address}`);
        setIntent(msg);
        // console.log(intent);
    }, []);

    const formSubmit = () => {
        // Doesn't work on browser because of CORS :(
        // console.log(twitterLink, 'twitterLink');
        // const twitterId = parseTweetId(twitterLink);
        // fetch(`https://api.twitter.com/2/tweets?ids=${twitterId}`, {
        //     "method": "GET",
        //     "headers": {
        //       "Authorization": `Bearer ${process.env.REACT_APP_TWITTER_TOKEN}`
        //     }
        // })
        // .then(res => {
        //     return res.json();
        // })
        // .then(res => {
        //     console.log(res, 'res');
        // });

        setVerifyBtnMsg('Verifying...');
        setTimeout(() => navigate('/verify2'), 4000);
    };

    return (
        <Fragment>
          {verified ? <Navigate to="/verify2" /> : null}
            <Row>
              <Col></Col>
              <Col xs="6 text-center mt-5">
                <h3>To verify your account,</h3>
                <div>
                  <p>1. <a href={`https://twitter.com/intent/tweet?text=${intent}`} target='_blank'> Send a tweet</a></p>
                  <p>2. Enter your Tweet link:</p>
                </div>
                <div className="text-center p-3">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><AiFillTwitterCircle className="text-info" width="1.5em" /></InputGroup.Text>
                      <FormControl
                        onChange={(ev) => setTwitterLink(ev.target.value)}
                        placeholder="Tweet Link"
                        aria-label="Tweet Link"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <Button onClick={formSubmit}
                    className="pt-1" variant="outline-primary" 
                    disabled={twitterLink.length < 3}>{verifyBtnMsg}</Button>
                </div>
              </Col>
              <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
