import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Verify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/explore');
        }, 5000);
    }, []);

    return (
        <Fragment>
          <h3 className="text-info mt-5">Thanks for verifying! We've saved your spot in line</h3>
          <h3 className="text-info mt-5">Keep an eye out -- we'll be tweeting you with a link when your NFT is minted</h3>
        </Fragment>
    );
};

export default Verify;
