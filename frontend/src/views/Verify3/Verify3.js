import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Verify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/explore');
        }, 4000);
    }, []);

    return (
        <Fragment>
          <h3 className="text-info mt-5">All done for now! We've saved <br/> your spot in line</h3>
          <hr/>
        </Fragment>
    );
};

export default Verify;
