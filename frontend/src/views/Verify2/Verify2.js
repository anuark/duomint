import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Twitters from '../../assets/TwitterProfiles.mp4';


const Verify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/verify3');
        }, 2000);
    }, []);

    return (
        <Fragment>
          <h3 className="text-info mt-5">Verifying you account...</h3>
          <hr/>
        <video className='videotwit' type='video/mp4' src={Twitters} autoPlay loop muted></video>

        </Fragment>
    );
};
// remove this from the flow

export default Verify;
