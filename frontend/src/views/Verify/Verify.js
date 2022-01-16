import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import { ethers } from "ethers";
import './Verify.css';

const Verify = props => {
    const { userAddress } = props;
    const [twitterLink, setTwitterLink] = useState('');
    const formRef = useRef();
    const [intent, setIntent] = useState('');
    const [verified, setVerify] = useState(false);


    const parseTweetId = (tweetText) => {
        return tweetText.split('/')[5].replace(/\?(.*)/, '');
    };
    
    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(0);

    const genMsg = async () => {
      let address = await signer.getAddress()
      let msg = encodeURIComponent(`Verifying on Duomint! 🍃🍃 ${address}`);
      setIntent(msg);
      console.log(intent);
    }

    const onVerify = () => {
        console.log(process.env.TWITTER_TOKEN, 'twitter token');
        formRef.current.submit((ev) => {
            ev.preventDefault();
            const twitterId = parseTweetId(twitterLink);
            fetch(`https://api.twitter.com/2/tweets?ids=${twitterId}`, {
                "method": "GET",
                "headers": {
                  "Authorization": `Bearer ${process.env.TWITTER_TOKEN}`
                }
            })
            .then(res => {
                return res.json();
            })
            // .then(res => {
            //     console.log(res, 'res');
            // });
        });
        setVerify(true);
    };

    return (
        <Fragment>
          {verified ? <Navigate to="/verify2" /> : null}
            <Row>
              <Col></Col>
              <Col xs="6 text-center mt-5">
                <h3>To verify your account,</h3>
                <div>
                  <p>1.<Button variant='link' onClick={genMsg}>Generate Message</Button></p>
                  <p>2. <a href={`https://twitter.com/intent/tweet?text=${intent}via=duomint`} target='_blank'> Tweet Verification</a></p>
                  <p>3. Enter your Twitter handle:</p>
                </div>
                <div className="text-center p-3">
                    <form ref={formRef}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><AiFillTwitterCircle className="text-info" width="1.5em" /></InputGroup.Text>
                      <FormControl
                        onChange={(ev) => setTwitterLink(ev.target.value)}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <Button 
                    className="pt-1" onClick={onVerify} variant="outline-primary" 
                    disabled={twitterLink.length < 3}>Verify</Button>
                    </form>
                </div>
              </Col>
              <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
