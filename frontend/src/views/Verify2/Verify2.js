import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';

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
        </Fragment>
    );
};

export default Verify;
