import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Verify.css';

const Verify = props => {
    const { userAddress } = props;
    const [twitterLink, setTwitterLink] = useState('');
    const formRef = useRef();

    const parseTweetId = (tweetText) => {
        return tweetText.split('/')[5].replace(/\?(.*)/, '');
    };
    
    const intentMsg = encodeURIComponent(`Verifying on Duomint! 🍃🍃 ${userAddress}`);
    console.log(intentMsg, 'intentMsg');

    const onClick = () => {
        console.log(process.env.TWITTER_TOKEN, 'twitter token');
        formRef.current.submit((ev) => {
            ev.preventDefault();
            const twitterId = parseTweetId(twitterLink);
            fetch(`https://api.twitter.com/2/tweets?ids=${twitterId}`, {
                "method": "GET",
                "headers": {
                  "Authorization": `Bearer ${process.env.TWITTER_TOKEN}`
                }
            });
            // .then(res => {
            //     return res.json();
            // })
            // .then(res => {
            //     console.log(res, 'res');
            // });
        });
    };

    return (
        <Fragment>
          <p>{userAddress}</p>
            <Row>
              <Col></Col>
              <Col xs="6 text-center mt-5">
                <h3>To verify your account,</h3>
                <h3>Click: <a href={`https://twitter.com/intent/tweet?text=${intentMsg}via=duomint`} target='_blank'>Tweet Verification</a></h3>
                <h3>Then, paste your tweet below:</h3>
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
                    <Button className="pt-1" href="/verify2" variant="outline-primary" disabled={twitterLink.length < 3}>Verify</Button>
                    </form>
                </div>
              </Col>
              <Col></Col>
            </Row>
        </Fragment>
    );
};

export default Verify;
